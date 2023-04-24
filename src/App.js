import "./App.css";
import Card from "./ui/card";
import NavBar from "./navbar";
import AddUser from "./addUser";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [addUser, setAddUser] = useState(false);
  const [userData, setUserData] = useState();
  const [userCount, setuserCount] = useState(0);
  console.log(userData);
  const ShowAddUser = () => {
    setAddUser(true);
  };
  const HideAddUser = () => {
    setAddUser(false);
  };

  const fetchCall = (callBack) => {
    // callBack();
    // console.log(callBack);
  };
  const getUserData = async () => {
    const q = query(collection(db, "UserData"));
    const querySnap = await getDocs(q);
    const userData = [];
    querySnap.forEach((doc) => {
      userData.push({ ...doc.data(), id: doc._id });
    });
    setUserData(userData);
    setuserCount(userData.length);
  };
  // const sortedData = () => {
  //   let sortedData = userData.sort((a, b) => {
  //     if (a.userName > b.userName) {
  //       return 1;
  //     } else if (a.userName < b.userName) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   console.log(sortedData);
  // };
  useEffect(() => {
    getUserData();
    // sortedData();
  }, []);
  return (
    <div className="App">
      {addUser && <AddUser onHideAddUser={HideAddUser} />}
      <div className="d-flex row containonHideAddUserer-fluid">
        <div className="col-2">
          <NavBar />
        </div>
        <div className="col-10">
          <Card
            onShowAddUser={ShowAddUser}
            userCount={userCount}
            userData={userData}
          />
        </div>
      </div>
      {/* <AddUser/> */}
    </div>
  );
}

export default App;
