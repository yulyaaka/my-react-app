import React from 'react';

interface IMessageProps {
  text: string;
}

const Message: React.FC<IMessageProps> = ({ text }) => {
  return (
    <div className="message">
      <p>{text}</p>
    </div>
  );
};

export default Message;