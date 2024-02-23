import React, { useState } from "react";
import dropdown from "../assets/dropdown.png";
import vector from "../assets/vector.png";

const Togglebar = () => {
  const toggleList = ["All Posts(32)", "Article", "Event", "Education", "Job"];
  const [isJoined, setIsJoined] = useState(false);

  const toggleJoinLeave = () => {
    setIsJoined(!isJoined);
  };

  return (
    <>
      <div className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top toggleBar">
        <ul className="nav my-2 nav-underline">
          {toggleList.map((item) => (
            <li className="nav-item" key={item}>
              <a
                href="/"
                className={`nav-link ${
                  item === "All Posts(32)" ? "active" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="d-flex my-2 align-iyems-center toggleBarRight">
          <button
            className="btn"
            aria-label={isJoined ? "Leave Group" : "Join Group"}
            onClick={toggleJoinLeave}
          >
            {isJoined ? "Leave Group" : "Join Group"}
            <img src={dropdown} alt="arrow-down" />
          </button>
          <button
            className="btn btn-primary ms-2 gap-2 d-flex align-items-center"
            aria-label="Write Post"
          >
            <img src={vector} alt="vector" />
            Write Post
          </button>
        </div>
      </div>

      <hr className="mx-auto mt-0 hr" />
    </>
  );
};

export default Togglebar;
