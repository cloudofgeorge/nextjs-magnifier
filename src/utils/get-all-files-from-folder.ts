import path from 'path';
import fs from 'fs/promises';

/**
 * Get all files from a folder based on the folder path
 * @example getAllFilesFromFolder('src/pages') => ['index.tsx', 'about.tsx']
 */
export const getAllFilesFromFolder = async (folderPath: string): Promise<string[]> => {
    const directory = path.join(process.cwd(), folderPath);
    return fs.readdir(directory);
};
