import React from 'react';
import styles from './ChatHeader.module.css';
import { Text } from '../../atoms';
import type { ChatHeaderProps } from '../../../types';

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <Text variant="title">{title}</Text>
    </div>
  );
};

export default ChatHeader;