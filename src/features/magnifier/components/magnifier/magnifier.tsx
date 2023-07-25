'use client';

import React, { useCallback, useState } from 'react';
import { List } from '@/common/components/ui/list';
import { View } from '../view';

type MagnifierProps = {
    preloadedList: string[];
};

export const Magnifier: React.FC<MagnifierProps> = ({ preloadedList }) => {
    const [itemToShow, setItemToShow] = useState(preloadedList[0]);

    const handleSetItemToShow = useCallback((value: string) => {
        setItemToShow(value);
    }, []);

    return (
        <div className="grid grid-cols-12 h-full gap-4">
            <View data={itemToShow} />
            <List
                className="px-4 lg:px-0 col-span-12 lg:col-span-5 lg:grid lg:grid-cols-2 lg:gap-4 max-lg:flex max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:overflow-y-hidden max-lg:scrollbar-hide max-lg:p-4"
                itemClassName="max-lg:snap-center max-sm:min-w-[75%] max-lg:min-w-[30%] max-lg:h-[25vh]"
                data={preloadedList}
                setActiveItem={handleSetItemToShow}
                activeItem={itemToShow}
            />
        </div>
    );
};
