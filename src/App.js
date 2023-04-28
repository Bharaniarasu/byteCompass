import "./App.scss";
import Card from "./ui/card";
import AddUserData from "./addUser/addUser";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./main";
import FormSuccess from "./formSuccess";
function App() {
  const [addUser, setAddUser] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userCount, setuserCount] = useState(0);

  const ShowAddUser = () => {
    setAddUser(true);
  };
  const HideAddUser = () => {
    setAddUser(false);
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
    sortData(userData);
  };

  const sortData = (data) => {
    let sortedData = data.sort((a, b) => {
      if (a.username > b.username) {
        return 1;
      } else if (a.username < b.username) {
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
