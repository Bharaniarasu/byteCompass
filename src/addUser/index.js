import { useEffect, useState } from "react";
import Modal from "../ui/overLay";
import "./addUser.scss";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setuserType] = useState("");
  const [userData, setUserData] = useState();

  const UserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const DesignationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const PhoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const UserTypeChangeHandler = (event) => {
    setuserType(event.target.value);
  };
  const SubmitFormHandler = async (e) => {
    e.preventDefault();
    console.log("Form Data");
    const formData = { userName, designation, email, phoneNumber, userType };
    await addDoc(collection(db, "UserData"), formData);
    console.log(formData);
    setUserName("");
    setDesignation("");
    setPhoneNumber("");
    setEmail("");
    setuserType("");
  };

  return (
    <Modal className="add-user" onHideAddUser={props.onHideAddUser}>
      <h5 className="text-center text-primary">ADD USER</h5>
      <form
        className="row g-3 needs-validation was-validated"
        onSubmit={SubmitFormHandler}
        novalidate
      >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={userName}
            onChange={UserNameChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value={designation}
            onChange={DesignationChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={email}
            onChange={EmailChangeHandler}
            required
          />
        </div>{" "}
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom02"
            value={phoneNumber}
            onChange={PhoneNumberChangeHandler}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom02" className="form-label">
            User Type
          </label>
          <select
            id="inputState"
            className="form-select"
            value={userName}
            onChange={UserTypeChangeHandler}
            required
          >
            <option value="Admin">Admin</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary " value="Submit" />
      </form>
    </Modal>
  );
};

export default AddUser;
