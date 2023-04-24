import React, { useEffect, useState } from "react";
import Modal from "../ui/overLay";
import "./formSuccess.scss";
import { useNavigate } from "react-router-dom";
const FormSuccess = (props) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    setInterval(() => setTimer(timer - 1), 1000);
    setTimeout(() => {
      navigate("/userlist");
    }, 15000);
  }, [timer]);

  return (
    <Modal onHideAddUser={props.onHideAddUser}>
      <div className="msg-container">
        <h3>Form Submitted Successfully !!!</h3>
        <p>You will Redirect to home within {timer} seconds...</p>
        <button
          className="btn btn-outline-primary mt-3 "
          onClick={() => {
            navigate("/userlist");
          }}
        >
          Home
        </button>
      </div>
    </Modal>
  );
};

export default FormSuccess;
