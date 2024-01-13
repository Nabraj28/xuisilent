import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "./Button";

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },

} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { bgColor: 'primary', children: 'Click Me' }
};
export const Secondary: Story = {
    args: { bgColor: 'secondary', children: 'Click Me' }
};
export const WithOnClick: Story = {
    args: { bgColor: 'primary', children: 'Click Me', onClick: () => { alert("Clicked!") } }
};
export const Disabled: Story = {
    args: { bgColor: 'primary', children: 'Click Me', disabled: true }
};

export const Gray: Story = {
    args: { bgColor: 'gray', children: 'Click Me' }
};

export const Gold: Story = {
    args: { bgColor: 'gold', children: 'Click Me' }
};

export const Bronze: Story = {
    args: { bgColor: 'bronze', children: 'Click Me' }
};

export const Brown: Story = {
    args: { bgColor: 'brown', children: 'Click Me' }
};

export const Yellow: Story = {
    args: { bgColor: 'yellow', children: 'Click Me' }
};

export const Amber: Story = {
    args: { bgColor: 'amber', children: 'Click Me' }
};

export const Orange: Story = {
    args: { bgColor: 'orange', children: 'Click Me' }
};

export const Tomato: Story = {
    args: { bgColor: 'tomato', children: 'Click Me' }
};

export const Red: Story = {
    args: { bgColor: 'red', children: 'Click Me' }
};

export const Ruby: Story = {
    args: { bgColor: 'ruby', children: 'Click Me' }
};

export const Crimson: Story = {
    args: { bgColor: 'crimson', children: 'Click Me' }
};

export const Pink: Story = {
    args: { bgColor: 'pink', children: 'Click Me' }
};

export const Plum: Story = {
    args: { bgColor: 'plum', children: 'Click Me' }
};

export const Purple: Story = {
    args: { bgColor: 'purple', children: 'Click Me' }
};

export const Violet: Story = {
    args: { bgColor: 'violet', children: 'Click Me' }
};

export const Iris: Story = {
    args: { bgColor: 'iris', children: 'Click Me' }
};

export const Indigo: Story = {
    args: { bgColor: 'indigo', children: 'Click Me' }
};

export const Blue: Story = {
    args: { bgColor: 'blue', children: 'Click Me' }
};

export const Cyan: Story = {
    args: { bgColor: 'cyan', children: 'Click Me' }
};

export const Teal: Story = {
    args: { bgColor: 'teal', children: 'Click Me' }
};

export const Jade: Story = {
    args: { bgColor: 'jade', children: 'Click Me' }
};

export const Green: Story = {
    args: { bgColor: 'green', children: 'Click Me' }
};

export const Grass: Story = {
    args: { bgColor: 'grass', children: 'Click Me' }
};

export const Lime: Story = {
    args: { bgColor: 'lime', children: 'Click Me' }
};

export const Mint: Story = {
    args: { bgColor: 'mint', children: 'Click Me' }
};

export const Sky: Story = {
    args: { bgColor: 'sky', children: 'Click Me' }
};
