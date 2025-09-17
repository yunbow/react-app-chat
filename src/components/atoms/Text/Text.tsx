import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'content' | 'time' | 'title';
}

const Text: React.FC<TextProps> = ({ children, variant = 'content' }) => {
  const getClassName = () => {
    switch (variant) {
      case 'time':
        return styles.messageTime;
      case 'title':
        return styles.title;
      default:
        return styles.messageContent;
    }
  };

  if (variant === 'title') {
    return <h1 className={getClassName()}>{children}</h1>;
  }

  return <div className={getClassName()}>{children}</div>;
};

export default Text;