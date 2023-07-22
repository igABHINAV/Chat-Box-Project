import React from "react";

interface HeaderProps {
  trip: string;
  from: string;
  to: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <div
        className="d-flex border-bottom text-center"
        style={{ borderBottom: "4px solid grey" }}
      >
        <div className="d-flex col-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            {/* SVG path data */}
          </svg>
          <h4 className="mx-4">{props.trip}</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="currentColor"
          className="bi bi-pencil-square align-left"
          style={{ textAlign: "left" }}
          viewBox="0 0 16 16"
        >
          {/* SVG path data */}
        </svg>
      </div>
      <br />
      <div
        className="d-flex border-bottom text-center"
        style={{ borderBottom: "4px solid grey" }}
      >
        <div
          style={{
            position: "relative",
            width: "32px",
            height: "32px",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
            alt="User Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h6>
          From <strong>{props.from}</strong> to <strong>{props.to}</strong>
        </h6>
        <br />
        <br />
      </div>
    </>
  );
};

export default Header;
