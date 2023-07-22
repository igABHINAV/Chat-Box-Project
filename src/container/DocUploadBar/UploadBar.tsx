import React from 'react';

const UploadBar: React.FC = () => {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button
          type="button"
          className="btn btn-success"
          style={{
            borderTopLeftRadius: '25px',
            borderBottomLeftRadius: '25px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-camera"
            viewBox="0 0 16 16"
          >
            {/* SVG path data */}
          </svg>
        </button>
        <button type="button" className="btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-camera-video"
            viewBox="0 0 16 16"
          >
            {/* SVG path data */}
          </svg>
        </button>
        <button
          type="button"
          className="btn btn-success"
          style={{
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-file-text"
            viewBox="0 0 16 16"
          >
            {/* SVG path data */}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UploadBar;
