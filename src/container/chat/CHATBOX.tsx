import React from 'react';
import Chats from './Chats';
import MyChat from './MyChat';

// Define the type for the "chat" item
interface ChatItem {
  sender: {
    self: boolean;
    image: string;
  };
  message: string;
}

// Define the prop types for the component
interface ChatBoxProps {
  chats: ChatItem[];
}

const CHATBOX: React.FC<ChatBoxProps> = (props) => {
  return (
    <div>
      {props.chats.map((item, index) => {
        return !item.sender.self ? (
          <Chats key={index} image={item.sender.image} message={item.message} />
        ) : (
          <MyChat key={index} message={item.message} />
        );
      })}
    </div>
  );
};

export default CHATBOX;
