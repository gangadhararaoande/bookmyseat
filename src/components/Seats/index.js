import React from "react";
import "./index.css";
import { MdOutlineChair } from "react-icons/md";

const Seats = () => {
  return (
    <div className="positionHandle">
      <div className="bottom-container">
        <div>
          <ul>
            <li>
              <MdOutlineChair className="available seat" />
              <p>Available</p>
            </li>

            <li>
              <MdOutlineChair className="unavailable size" />
              <p>Unavailable</p>
            </li>

            <li>
              <MdOutlineChair className="yourselection size" />
              <p>Your Selection</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Seats;
