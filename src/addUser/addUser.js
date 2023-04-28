import Modal from "../ui/overLay";
import "./addUser.scss";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
const schema = yup.object().shape({
  username: yup
    .string()
    .min(3, "**Enter a valid Username**")
    .required("**Enter a valid Username**"),
  designation: yup
    .string()
    .required("**Enter your Designation**")

    .min(2, "**Enter a valid Designation**"),
  email: yup
    .string()
    .email("**Enter a valid Email ID**")
    .required("**Enter your Mail ID**"),
  phonenumber: yup
    .string()
    .required("**Enter Your Phone Number**")
    .min(10, "**Enter a valid 10 digit Phone Number**")
    .max(12, "**Enter a valid 10 digit Phone Number**"),
  usertype: yup.string().required("**Select an User Type**"),
});
const AddUserData = (props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const SubmitFormHandler = async (data, e) => {
    e.preventDefault();
    console.log("data-", data);
    await addDoc(collection(db, "UserData"), data);
    navigate("/formSent");
  };
  console.log(errors);
  return (
    <Modal className="add_user_panel" onHideAddUser={props.onHideAddUser}>
      <h3 className="">ADD USER</h3>
      <form
        className="add_user_form"
        onSubmit={handleSubmit(SubmitFormHandler)}
      >
        <div className="form_content">
          <label htmlFor="username" className="">
            User name
          </label>
          <input
            type="text"
            className=" "
            id="username"
            {...register("username")}
          />

          <p className="text-warning">{errors.username?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="designation" className="">
            Designation
          </label>
          <input
            type="text"
            className=" "
            id="designation"
            {...register("designation")}
          />

          <p className="text-warning">{errors.designation?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="email" className="">
            Email ID
          </label>
          <input type="email" className=" " id="email" {...register("email")} />

          <p className="text-warning">{errors.email?.message}</p>
        </div>{" "}
        <div className="form_content">
          <label htmlFor="phone" className="">
            Phone Number
          </label>
          <input
            type="number"
            className=""
            id="phone"
            {...register("phonenumber")}
          />

          <p className="text-warning">{errors.phonenumber?.message}</p>
        </div>
        <div className="form_content form_content_select">
          <label htmlFor="usertype" className="">
            User Type
          </label>
          <select id="usertype" className=" " {...register("usertype")}>
            <option></option>
            <option value="Admin">Admin</option>
            <option value="Recruiter">Recruiter</option>
          </select>
          <p className="text-warning">{errors.usertype?.message}</p>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          className="submit_button "
          value="Submit"
          disabled={isDirty && !isValid}
        />
      </form>
    </Modal>
  );
};

export default AddUserData;
