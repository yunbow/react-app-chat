export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getCurrentTime = (): string => {
  return formatTime(new Date());
};

export const generateMessageId = (): string => {
  return Date.now().toString();
};

export const getRandomReply = (replies: readonly string[]): string => {
  return replies[Math.floor(Math.random() * replies.length)];
};