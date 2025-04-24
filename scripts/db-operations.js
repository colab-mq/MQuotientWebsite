/**
 * Database Operations Helper Script
 * 
 * This script helps with common database operations:
 * - Checking database connection
 * - Pushing schema changes to the database
 * - Viewing table structure
 * 
 * Usage: node scripts/db-operations.js [action]
 * Actions:
 *   - check: Check database connection
 *   - push: Push schema changes to database
 *   - tables: Show all tables
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

// Get command line argument
const action = process.argv[2]?.toLowerCase();

// Available actions
const actions = ['check', 'push', 'tables'];

if (!action || !actions.includes(action)) {
  console.log('Please specify a valid action: check, push, or tables');
  console.log('Example: node scripts/db-operations.js check');
  process.exit(1);
}

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set.');
  console.error('Please set it before running this script.');
  process.exit(1);
}

// Execute the requested action
async function executeAction() {
  try {
    switch (action) {
      case 'check':
        console.log('Checking database connection...');
        await checkDatabaseConnection();
        break;
      case 'push':
        console.log('Pushing schema changes to database...');
        await pushSchema();
        break;
      case 'tables':
        console.log('Fetching database tables...');
        await showTables();
        break;
    }
  } catch (error) {
    console.error('Error executing action:', error.message);
    process.exit(1);
  }
}

// Check database connection
async function checkDatabaseConnection() {
  try {
    console.log('Attempting to connect to database...');
    
    // Simple query to check database connection
    const testQuery = `
      SELECT 1 as connection_test;
    `;
    
    // Use the DATABASE_URL to connect and run a simple query
    const { stdout, stderr } = await execPromise(`npx tsx -e "
      import { Pool } from '@neondatabase/serverless';
      import ws from 'ws';
      
      async function testConnection() {
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });
        try {
          const result = await pool.query('SELECT 1 as connection_test');
          console.log('Connection successful!', result.rows[0]);
          await pool.end();
        } catch (error) {
          console.error('Connection failed:', error.message);
          process.exit(1);
        }
      }
      
      testConnection();
    "`);
    
    if (stderr) {
      console.error('Error:', stderr);
      return;
    }
    
    console.log(stdout);
  } catch (error) {
    console.error('Database connection check failed:', error.message);
    throw error;
  }
}

// Push schema changes to database
async function pushSchema() {
  try {
    console.log('Pushing schema to database...');
    const { stdout, stderr } = await execPromise('npm run db:push');
    
    if (stderr) {
      console.error('Warning/Error:', stderr);
    }
    
    console.log(stdout);
    console.log('Schema push completed');
  } catch (error) {
    console.error('Schema push failed:', error.message);
    throw error;
  }
}

// Show all tables in the database
async function showTables() {
  try {
    const { stdout, stderr } = await execPromise(`npx tsx -e "
      import { Pool } from '@neondatabase/serverless';
      
      async function listTables() {
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });
        try {
          const result = await pool.query(\`
            SELECT 
              table_name,
              (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) as column_count
            FROM 
              information_schema.tables t
            WHERE 
              table_schema = 'public'
            ORDER BY 
              table_name;
          \`);
          
          if (result.rows.length === 0) {
            console.log('No tables found in the database.');
          } else {
            console.log('Tables in the database:');
            console.table(result.rows);
          }
          
          await pool.end();
        } catch (error) {
          console.error('Failed to list tables:', error.message);
          process.exit(1);
        }
      }
      
      listTables();
    "`);
    
    if (stderr) {
      console.error('Warning/Error:', stderr);
    }
    
    console.log(stdout);
  } catch (error) {
    console.error('Failed to show tables:', error.message);
    throw error;
  }
}

// Run the specified action
executeAction();