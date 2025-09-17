import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/atoms';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['content', 'time', 'title'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    children: 'これはメッセージの内容です。',
    variant: 'content',
  },
};

export const Time: Story = {
  args: {
    children: '12:34',
    variant: 'time',
  },
};

export const Title: Story = {
  args: {
    children: 'チャットアプリ',
    variant: 'title',
  },
};