export interface Message {
  id: string;
  content: string;
  time: string;
  type: 'sent' | 'received';
}

export interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
}

export interface MessageItemProps {
  message: Message;
}

export interface MessageListProps {
  messages: Message[];
}

export interface SendButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export interface ChatHeaderProps {
  title: string;
}

export interface ChatContainerProps {
  children: React.ReactNode;
}