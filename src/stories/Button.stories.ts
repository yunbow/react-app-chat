import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/atoms';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('Button clicked'),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    onClick: () => console.log('Button clicked'),
    disabled: true,
  },
};