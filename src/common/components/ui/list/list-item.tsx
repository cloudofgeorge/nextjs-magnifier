import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ListItemProps } from './types';

/**
 * ListItem component
 * Shows a list item with an image
 */
export const ListItem: React.FC<ListItemProps> = ({ src, alt = 'List item', isActive, className, ...props }) => {
    if (!src) {
        return null;
    }

    const classNames = clsx(
        'group flex rounded-large relative overflow-hidden items-center justify-center bg-color-40 h-80',
        {
            'is-active ring-4 ring-color-40': isActive,
        },
        className,
    );

    return (
        <div className={classNames} role="button" {...props}>
            <Image
                className="block w-full h-full object-cover transition-transform group-hover:scale-110 duration-200 group-[.is-active]:hover:scale-100"
                src={src}
                sizes="100vw"
                alt={alt}
                quality={75}
                fill
            />
        </div>
    );
};
