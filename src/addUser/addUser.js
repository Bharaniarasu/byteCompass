import { useEffect, useState } from "react";
import Modal from "../ui/overLay";
import "./addUser.scss";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
const AddUserData = (props) => {
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setuserType] = useState("");
  const [userData, setUserData] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { username: userName },
  });
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
  const SubmitFormHandler = async (data, e) => {
    e.preventDefault();
    console.log("data-", data);
    const formData = { userName, designation, email, phoneNumber, userType };
    await addDoc(collection(db, "UserData"), data);
    setUserName("");
    setDesignation("");
    setPhoneNumber("");
    setEmail("");
    setuserType("");
  };
  const uname = watch("username");
  return (
    <Modal className="add-user" onHideAddUser={props.onHideAddUser}>
      <h5 className="text-center text-primary">ADD USER</h5>
      <form className="row g-3 p-2" onSubmit={handleSubmit(SubmitFormHandler)}>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            onChange={UserNameChangeHandler}
            {...register("username", { required: "Enter valid data " })}
          />
          {errors?.username && (
            <p className="text-danger ">**Enter a Valid Data**</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            {...register("designation", { required: "Enter valid data " })}
          />
          {errors?.designation && (
            <p className="text-danger ">**Enter a Valid Data**</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            {...register("email", { required: "Enter valid data " })}
          />
          {errors?.email && (
            <p className="text-danger ">**Enter a Valid Data**</p>
          )}
        </div>{" "}
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom02"
            {...register("phonenumber", {
              required: "Enter valid data ",
              maxLength: { value: 10, message: "Enter a Valid Phone Number" },
              minLength: { value: 10, message: "Enter a Valid Phone Number" },
            })}
          />
          {errors?.phonenumber && (
            <p className="text-danger ">**Enter a Valid Phone Number**</p>
          )}
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom02" className="form-label">
            User Type
          </label>
          <select
            id="inputState"
            className="form-select"
            {...register("usertype", { required: "Select valid data " })}
          >
            <option value="Admin">Admin</option>
            <option value="Recruiter">Recruiter</option>
          </select>
          {errors?.usertype && (
            <p className="text-danger ">**Select a Valid Type**</p>
          )}
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" className="btn btn-primary " value="Submit" />
      </form>
    </Modal>
  );
};

export default AddUserData;
