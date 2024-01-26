import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getUserList from "../getRequests/getAllUsers";

const AddFriends = ({ currentUser, setUserViewed }) => {
  const { userList, error, loading } = getUserList();
  const [currentAdd, setCurrentAdd] = useState("");
  const [possibleAdd, setPossibleAdd] = useState([]);
  function handleAddChange(e) {
    setCurrentAdd(e.target.value);
  }
  useEffect(() => {
    if (userList) {
      let current = currentAdd.toLowerCase();
      let length = current.length;
      let friendObject = [];
      for (let i = 0; i < userList.length; i++) {
        let friend = userList[i].username;
        friend = String(friend);
        friend = friend.slice(0, length);
        if (friend === current)
          friendObject.push({
            username: userList[i].username,
            _id: userList[i]._id,
          });
        setPossibleAdd(friendObject);
      }
    }
  }, [currentAdd]);
  function setUserId(e) {
    let userID = e.target.className;
    setUserViewed(userID);
  }
  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="page">
      {currentUser ? (
        <div className="page">
          <h2 className="tableHeader">Add Friends</h2>
          <label className="formTo">
            To:
            <input
              className="formToInput"
              type="text"
              placeholder="username"
              onChange={handleAddChange}
              value={currentAdd}
            />
          </label>
          <div id="friendOptions">
            {possibleAdd.map((friend, index) => {
              return (
                <button onClick={setUserId} id="selectedFriend">
                  <Link
                    to="/userProfile1"
                    className={friend._id}
                    key={friend._id}
                  >
                    {friend.username}
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="signInMessage">
          <h1 className="pageTitle">Home</h1>
          <p>Must be Signed In to view this page</p>
          <div className="signInUp">
            <Link to="/sign-in" className="signInButton">
              Sign In
            </Link>
            <Link to="/sign-up" className="signInButton">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFriends;
