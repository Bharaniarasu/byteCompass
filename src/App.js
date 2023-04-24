import "./App.css";
import Card from "./ui/card";
import NavBar from "./navbar";
import AddUserData from "./addUser/addUser";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import FormSuccess from "./formSuccess";
function App() {
  const [addUser, setAddUser] = useState(false);
  const [userData, setUserData] = useState();
  const [userCount, setuserCount] = useState(0);
  // const [successMsg, setSuccessMsg] = useState(true);

  // console.log(userData);
  const ShowAddUser = () => {
    setAddUser(true);
  };
  const HideAddUser = () => {
    setAddUser(false);
    // setSuccessMsg(false);
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
  console.log(userData);

  const sortedData = () => {
    let sortedData = userData.sort((a, b) => {
      if (a.userName > b.userName) {
        return 1;
      } else if (a.userName < b.userName) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(sortedData);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Router>
      <Main>
        <Routes>
          <Route
            exact
            path="/userList"
            element={
              <>
                {addUser && <AddUserData onHideAddUser={HideAddUser} />}
                <Card
                  onShowAddUser={ShowAddUser}
                  userCount={userCount}
                  userData={userData}
                />
              </>
            }
          />
          <Route
            exact
            path="/formSent"
            element={<FormSuccess onHideAddUser={HideAddUser} />}
          />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
