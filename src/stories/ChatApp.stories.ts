import type { Meta, StoryObj } from '@storybook/react';
import { ChatApp } from '../components/organisms';

const meta: Meta<typeof ChatApp> = {
  title: 'Organisms/ChatApp',
  component: ChatApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};