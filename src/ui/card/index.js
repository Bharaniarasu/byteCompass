import "./card.scss";
import React, { useState } from "react";
import UserData from "./userData";

const Card = (props) => {
  const [userCount, setUserCount] = useState();

  return (
    <>
      <div className="card ">
        <div className="card-header">
          <div className="user-count fw-bold">{props.userCount} Users</div>
          <div className="user-add">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.onShowAddUser();
              }}
            >
              +Add User
            </button>
          </div>
        </div>
        <div className="card-body">
          <UserData data={props.userData} />
        </div>
      </div>
    </>
  );
};

export default Card;
