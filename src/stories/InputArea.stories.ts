import type { Meta, StoryObj } from '@storybook/react';
import { InputArea } from '../components/molecules';

const meta: Meta<typeof InputArea> = {
  title: 'Molecules/InputArea',
  component: InputArea,
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
    onSend: () => console.log('Send clicked'),
    placeholder: 'メッセージを入力...',
  },
};

export const WithText: Story = {
  args: {
    value: 'こんにちは！',
    onChange: (value: string) => console.log('Input changed:', value),
    onSend: () => console.log('Send clicked'),
    placeholder: 'メッセージを入力...',
  },
};