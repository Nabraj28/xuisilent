import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const meta = {
    title: 'UI/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },

} satisfies Meta<typeof Label>
export default meta;
type Story = StoryObj<typeof meta>;

export const Smallsize: Story = {
    args: { size: 'small', children: "Hello World!" }
};
export const Mediumsize: Story = {
    args: { size: 'medium', children: "Hello World!" }
};