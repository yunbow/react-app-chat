import React from 'react';
import styles from './Button.module.css';
import type { SendButtonProps } from '../../../types';

const Button: React.FC<SendButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      ▶
    </button>
  );
};

export default Button;