import React from 'react';
import styles from './ChatApp.module.css';
import ChatContainer from '../ChatContainer/ChatContainer';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageList from '../MessageList/MessageList';
import { InputArea } from '../../molecules';
import { useChat } from '../../../hooks/useChat';
import { CONFIG } from '../../../Config';

const ChatApp: React.FC = () => {
  const { messages, inputValue, setInputValue, sendMessage } = useChat();

  return (
    <div className={styles.wrapper}>
      <ChatContainer>
        <ChatHeader title={CONFIG.APP_TITLE} />
        <MessageList messages={messages} />
        <InputArea
          value={inputValue}
          onChange={setInputValue}
          onSend={sendMessage}
          placeholder={CONFIG.MESSAGE_PLACEHOLDER}
        />
      </ChatContainer>
    </div>
  );
};

export default ChatApp;