import React from 'react';
import TextBar from './TextBar/TextBar';
import Header from './Header/Header';
import CHATBOX from './chat/CHATBOX';
import DAta from '../DATA/DATA';

// Define the type for the data from DAta
interface ChatData {
  from: string;
  to: string;
  name: string;
  chats: {
    sender: {
      self: boolean;
      image: string;
    };
    message: string;
  }[];
}

const MAIN: React.FC = () => {
  const data: ChatData = DAta;
  return (
    <div>
      <div className='container justify-content-center' style={{ backgroundColor: "rgb(241, 241, 241)", width: "450px" }}>
        <br /><br />
        <Header from={data.from} to={data.to} trip={data.name} />
        <br />
        <CHATBOX chats={data.chats} />
        
        <br />
        <TextBar />
        <br /><br />
      </div>
    </div>
  );
};

export default MAIN;
