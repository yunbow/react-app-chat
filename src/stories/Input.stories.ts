import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/atoms';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (value: string) => console.log('Input changed:', value),
    placeholder: 'メッセージを入力...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'こんにちは',
    onChange: (value: string) => console.log('Input changed:', value),
    placeholder: 'メッセージを入力...',
  },
};