/**
 * Database Snapshot Script
 * 
 * This script creates a snapshot of your database data in JSON format.
 * You can use it for backups or to initialize a new database with sample data.
 * 
 * Usage: node scripts/db-snapshot.js [action]
 * Actions:
 *   - export: Export database data to JSON files (default)
 *   - import: Import data from snapshot JSON files into the database
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execPromise = promisify(exec);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

// Get command line argument
const action = process.argv[2]?.toLowerCase() || 'export';

// Set the snapshot directory
const SNAPSHOT_DIR = path.join(process.cwd(), 'snapshots');

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set.');
  console.error('Please set it before running this script.');
  process.exit(1);
}

// Create the snapshot directory if it doesn't exist
async function ensureSnapshotDirExists() {
  try {
    if (!fs.existsSync(SNAPSHOT_DIR)) {
      await mkdir(SNAPSHOT_DIR, { recursive: true });
      console.log(`Created snapshot directory: ${SNAPSHOT_DIR}`);
    }
  } catch (error) {
    console.error('Failed to create snapshot directory:', error.message);
    throw error;
  }
}

// Export data from all tables to JSON files
async function exportData() {
  try {
    await ensureSnapshotDirExists();
    
    // First, get a list of all tables
    const tables = await getTables();
    
    if (tables.length === 0) {
      console.log('No tables found in the database.');
      return;
    }
    
    console.log(`Found ${tables.length} tables: ${tables.join(', ')}`);
    
    // Export data from each table
    for (const table of tables) {
      await exportTable(table);
    }
    
    console.log('\nExport completed successfully!');
    console.log(`Snapshot files are in: ${SNAPSHOT_DIR}`);
  } catch (error) {
    console.error('Export failed:', error.message);
    process.exit(1);
  }
}

// Import data from JSON files into the database
async function importData() {
  try {
    if (!fs.existsSync(SNAPSHOT_DIR)) {
      console.error(`Snapshot directory not found: ${SNAPSHOT_DIR}`);
      return;
    }
    
    // Get all JSON files in the snapshot directory
    const files = fs.readdirSync(SNAPSHOT_DIR)
      .filter(file => file.endsWith('.json'));
    
    if (files.length === 0) {
      console.log('No snapshot files found.');
      return;
    }
    
    console.log(`Found ${files.length} snapshot files.`);
    
    // Import data from each file
    for (const file of files) {
      const tableName = path.basename(file, '.json');
      await importTable(tableName);
    }
    
    console.log('\nImport completed successfully!');
  } catch (error) {
    console.error('Import failed:', error.message);
    process.exit(1);
  }
}

// Get a list of all tables in the database
async function getTables() {
  try {
    const { stdout } = await execPromise(`npx tsx -e "
      import { Pool } from '@neondatabase/serverless';
      
      async function listTables() {
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });
        try {
          const result = await pool.query(\`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name;
          \`);
          
          console.log(JSON.stringify(result.rows.map(row => row.table_name)));
          await pool.end();
        } catch (error) {
          console.error('Failed to list tables:', error.message);
          process.exit(1);
        }
      }
      
      listTables();
    "`);
    
    return JSON.parse(stdout.trim());
  } catch (error) {
    console.error('Failed to get tables:', error.message);
    throw error;
  }
}

// Export data from a single table to a JSON file
async function exportTable(tableName) {
  try {
    console.log(`Exporting table: ${tableName}`);
    
    const { stdout } = await execPromise(`npx tsx -e "
      import { Pool } from '@neondatabase/serverless';
      
      async function exportTable() {
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });
        try {
          const result = await pool.query(\`
            SELECT * FROM ${tableName}
          \`);
          
          console.log(JSON.stringify(result.rows));
          await pool.end();
        } catch (error) {
          console.error('Failed to export table:', error.message);
          process.exit(1);
        }
      }
      
      exportTable();
    "`);
    
    const data = JSON.parse(stdout.trim());
    const filePath = path.join(SNAPSHOT_DIR, `${tableName}.json`);
    
    await writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`  - Exported ${data.length} rows to ${filePath}`);
  } catch (error) {
    console.error(`Failed to export table ${tableName}:`, error.message);
    throw error;
  }
}

// Import data from a JSON file into a table
async function importTable(tableName) {
  try {
    const filePath = path.join(SNAPSHOT_DIR, `${tableName}.json`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${tableName}: snapshot file not found.`);
      return;
    }
    
    console.log(`Importing data into table: ${tableName}`);
    
    // Read the data from the JSON file
    const fileContent = await readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    if (data.length === 0) {
      console.log(`  - No data to import for ${tableName}`);
      return;
    }
    
    // For each row in the data, insert it into the table
    let successCount = 0;
    
    for (const row of data) {
      // Get the column names and values
      const columns = Object.keys(row);
      const values = columns.map(col => {
        const val = row[col];
        if (val === null) return 'NULL';
        if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`; // Escape single quotes
        return val;
      });
      
      // Create the INSERT query
      const query = `
        INSERT INTO ${tableName} (${columns.join(', ')})
        VALUES (${values.join(', ')})
        ON CONFLICT DO NOTHING;
      `;
      
      // Execute the query
      await execPromise(`npx tsx -e "
        import { Pool } from '@neondatabase/serverless';
        
        async function insertData() {
          const pool = new Pool({ connectionString: process.env.DATABASE_URL });
          try {
            await pool.query(\`${query}\`);
            await pool.end();
          } catch (error) {
            console.error('Failed to insert data:', error.message);
            process.exit(1);
          }
        }
        
        insertData();
      "`);
      
      successCount++;
    }
    
    console.log(`  - Imported ${successCount} rows into ${tableName}`);
  } catch (error) {
    console.error(`Failed to import data into ${tableName}:`, error.message);
    throw error;
  }
}

// Execute the requested action
async function execute() {
  if (action === 'export') {
    await exportData();
  } else if (action === 'import') {
    await importData();
  } else {
    console.log('Please specify a valid action: export or import');
    console.log('Example: node scripts/db-snapshot.js export');
  }
}

execute();