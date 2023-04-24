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
    }, 10000);
  }, [timer]);

  return (
    <Modal onHideAddUser={props.onHideAddUser}>
      <div className="msg-container">
        <h3>Form Submitted Successfully !!!</h3>
        <p>You will Redirect to home within {timer} seconds...</p>
      </div>
    </Modal>
  );
};

export default FormSuccess;
