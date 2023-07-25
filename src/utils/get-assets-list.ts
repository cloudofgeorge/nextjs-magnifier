import path from 'path';
import { getAllFilesFromFolder } from './get-all-files-from-folder';

type Options = {
    /**
     * List of file extensions to filter out
     * @example ['jpg', 'png'] // will filter out all files except jpg and png
     */
    filter: string[];
};

/**
 * Get all assets from public folder based on the folder path
 * @example getAssetsList('/images') // ['images/1.jpg', 'images/2.jpg']
 */
export const getAssetsList = async (folderPath: string, options?: Options) => {
    const result = [];
    const files = await getAllFilesFromFolder(`/public/${folderPath}`);

    /**
     * Transform filters to object with null values.
     * We prepare that to keep O(1) complexity when checking if file extension is in filter.
     */
    const transformedFilters = options?.filter.reduce(
        (acc, curr) => ({
            ...acc,
            [`.${curr}`]: null,
        }),
        {},
    );

    for (const file of files) {
        /**
         * Considering the options
         */
        if (options) {
            /**
             * Filter out files that are not in filter
             */
            if (
                transformedFilters &&
                options.filter &&
                options.filter.length > 0 &&
                !Object.hasOwn(transformedFilters, `${path.extname(file)}`)
            ) {
                continue;
            }
        }

        /**
         * Check if file has extension (is not folder)
         */
        if (path.extname(file)) {
            result.push(path.join(folderPath, file));
        }
    }

    return result;
};
