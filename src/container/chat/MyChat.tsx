import React from 'react';

interface MyChatProps {
  message: string;
}

const MyChat: React.FC<MyChatProps> = (props) => {
  const shadowStyle: React.CSSProperties = {
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    border: '2px',
    backgroundClip: 'padding-box',
    backgroundColor: 'blue',
    textAlign: 'left',
    display: 'inline-block',
    borderBottomRightRadius: '0',
  };

  return (
    <div className="d-flex text-body-secondary pt-3  justify-content-center">
      <div className="border mx-5 my-2" style={{ width: "90%" }}>
        <p className="pb-3 mb-0 small lh-sm border-bottom" style={shadowStyle}>
          <strong className="d-block text-white px-2 py-2">{props.message}</strong>
        </p>
      </div>
    </div>
  );
};

export default MyChat;
