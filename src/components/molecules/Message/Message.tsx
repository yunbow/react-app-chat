import React from 'react';
import styles from './Message.module.css';
import { Text } from '../../atoms';
import type { MessageItemProps } from '../../../types';

const Message: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div className={`${styles.message} ${styles[message.type]}`}>
      <Text variant="content">{message.content}</Text>
      <Text variant="time">{message.time}</Text>
    </div>
  );
};

export default Message;