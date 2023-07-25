import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { List } from './list';

type ListProps = React.ComponentProps<typeof List>;

type Story = StoryObj<ListProps>;

const data = ['https://placehold.co/300x400', 'https://placehold.co/200x400', 'https://placehold.co/500x400'];

const meta: Meta<ListProps> = {
    title: 'Components/UI/List',
    component: List,
    args: {
        data,
    },
};

export const Common: Story = {
    name: 'List',
    render: (args) => {
        const [{ activeItem = data[0] }, updateArgs] = useArgs();

        return <List {...args} setActiveItem={(value) => updateArgs({ activeItem: value })} activeItem={activeItem} />;
    },
};

export default meta;
