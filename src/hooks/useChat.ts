import { useState, useCallback } from 'react';
import type { Message } from '../types';
import { getCurrentTime, generateMessageId, getRandomReply } from '../utils';
import { CONFIG } from '../Config';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'こんにちは！チャットへようこそ！',
      time: '12:00',
      type: 'received'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addMessage = useCallback((content: string, type: 'sent' | 'received') => {
    const newMessage: Message = {
      id: generateMessageId(),
      content,
      time: getCurrentTime(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const sendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'sent');
    setInputValue('');

    setTimeout(() => {
      const reply = getRandomReply(CONFIG.AUTO_REPLIES);
      addMessage(reply, 'received');
    }, CONFIG.AUTO_REPLY_DELAY);
  }, [inputValue, addMessage]);

  return {
    messages,
    inputValue,
    setInputValue,
    sendMessage
  };
};