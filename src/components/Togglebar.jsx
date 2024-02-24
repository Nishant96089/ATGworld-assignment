import React, { useState } from "react";
import dropdown from "../assets/dropdown.png";
import vector from "../assets/vector.png";
import leave from "../assets/leave.png";

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
            className="btn ms-2 gap-2 d-flex align-items-center"
            aria-label="Write Post"
          >
            Write Post
            <img src={dropdown} alt="vector" />
          </button>
          <button
            className={isJoined ? "btn" : "btn btn-primary"}
            aria-label={isJoined ? "Leave Group" : "Join Group"}
            onClick={toggleJoinLeave}
          >
            {isJoined ? (
              <>
                <img src={leave} alt="leave" />
                Leave Group
              </>
            ) : (
              <>
                {" "}
                <img src={vector} alt="arrow-down" /> Join Group{" "}
              </>
            )}
          </button>
        </div>
      </div>

      <hr className="mx-auto mt-0 hr" />
    </>
  );
};

export default Togglebar;
