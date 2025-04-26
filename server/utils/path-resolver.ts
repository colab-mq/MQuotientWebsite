/**
 * Path resolver utility
 * 
 * This utility helps resolve file paths in a way that's compatible
 * with both development and Docker environments.
 */

import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Converts a relative path to an absolute path from the project root
 * Compatible with both Docker and development environments
 */
export function resolveFromRoot(relativePath: string): string {
  // In Docker environments, import.meta.dirname might not work as expected
  // We use fileURLToPath as a fallback
  try {
    // First try using import.meta.dirname (works in most environments)
    const projectRoot = path.resolve(import.meta.dirname, '../..');
    return path.join(projectRoot, relativePath);
  } catch (error) {
    console.log('Using fileURLToPath fallback for path resolution');
    // Fallback to using fileURLToPath (for Docker compatibility)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // utils folder is two levels deep from project root
    const projectRoot = path.resolve(__dirname, '../..');
    return path.join(projectRoot, relativePath);
  }
}