import type { Meta, StoryObj } from '@storybook/react';
import { Message } from '../components/molecules';

const meta: Meta<typeof Message> = {
  title: 'Molecules/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Sent: Story = {
  args: {
    message: {
      id: '1',
      content: 'こんにちは！元気ですか？',
      time: '12:34',
      type: 'sent',
    },
  },
};

export const Received: Story = {
  args: {
    message: {
      id: '2',
      content: 'はい、元気です！ありがとうございます。',
      time: '12:35',
      type: 'received',
    },
  },
};

export const LongMessage: Story = {
  args: {
    message: {
      id: '3',
      content: 'これは長いメッセージの例です。複数行にわたる場合の表示を確認するためのサンプルテキストです。',
      time: '12:36',
      type: 'sent',
    },
  },
};