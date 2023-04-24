import "./userData.scss";
import React, { useState } from "react";

const UserData = (props) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>User Name</th>
            <th> Email ID</th>
            <th>Mobile Number</th>
            <th>User Type</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((data) => (
              <tr className="table-row">
                <td className="mt-2">{data.username}</td>

                <td>{data.email}</td>
                <td>{data.phonenumber}</td>
                <td>{data.usertype}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    ></label>
                  </div>
                </td>

                <td>
                  <button className="btn btn-outline-primary ">Edit</button>
                </td>
                <td>
                  <button className="btn btn-outline-danger ">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
