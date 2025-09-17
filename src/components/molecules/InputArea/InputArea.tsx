import React from 'react';
import styles from './InputArea.module.css';
import { Input, Button } from '../../atoms';
import type { ChatInputProps } from '../../../types';

const InputArea: React.FC<ChatInputProps> = ({ value, onChange, onSend, placeholder }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className={styles.inputArea}>
      <Input
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
      <Button onClick={onSend} disabled={!value.trim()} />
    </div>
  );
};

export default InputArea;