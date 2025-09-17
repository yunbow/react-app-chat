import React from 'react';
import styles from './ChatContainer.module.css';
import type { ChatContainerProps } from '../../../types';

const ChatContainer: React.FC<ChatContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ChatContainer;