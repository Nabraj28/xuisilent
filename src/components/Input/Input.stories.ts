import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },

} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderWhite: Story = {
    args: { border: 'white' }
};
export const BorderGray: Story = {
    args: { border: 'gray' }
};
export const BorderBlack: Story = {
    args: { border: 'black' }
};

