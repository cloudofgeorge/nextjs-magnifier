import React from 'react';
import clsx from 'clsx';
import { ListItem } from './list-item';
import type { ListProps } from './types';

/**
 * List component
 * Shows a list of items with images
 */
export const List: React.FC<ListProps> = ({ data, activeItem, setActiveItem, className, itemClassName }) => {
    if (!data) {
        return null;
    }

    const classNames = clsx('grid grid-cols-2 gap-4', className);

    return (
        <div className={classNames}>
            {data.map((item, index) => (
                <ListItem
                    key={item}
                    className={itemClassName}
                    src={item}
                    tabIndex={index}
                    alt={`List item ${index}`}
                    isActive={activeItem === item}
                    onClick={() => setActiveItem(item)}
                />
            ))}
        </div>
    );
};
