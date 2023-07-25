import React, { HTMLAttributes } from 'react';

export type ListItemProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    /**
     * Asset source
     */
    src?: string | null;
    /**
     * Asset alt
     */
    alt?: string;
    /**
     * Callback to set active item
     */
    isActive?: boolean;
};

export type ListProps = {
    /**
     * List of assets to display
     */
    data?: string[] | null;
    /**
     * Callback to set active item
     * @param value
     */
    setActiveItem: (value: string) => void;
    /**
     * Active item
     */
    activeItem?: string | null;
    /**
     * Extra class name
     */
    className?: string;
    /**
     * Extra class name for list item
     */
    itemClassName?: string;
};
