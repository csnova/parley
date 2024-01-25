import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostNewMessage from "../postRequests/postNewMessage";
import getFriendsList from "../getRequests/getFriendsList";

const NewMessage = ({ currentUser, setThreadViewed }) => {
  const [currentTo, setCurrentTo] = useState("");
  const [possibleTo, setPossibleTo] = useState([]);
  const [isPossible, setIsPossible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const navigate = useNavigate();
  const { friendsList, error, loading } = getFriendsList(currentUser._id);
  const { newMessage, attemptNewMessage } = usePostNewMessage();

  useEffect(() => {
    if (newMessage) {
      setThreadViewed(newMessage);
      navigate("/threadMessages");
    }
  }, [newMessage]);

  useEffect(() => {
    if (friendsList) {
      let current = currentTo.toLowerCase();
      let length = current.length;
      let friendObject = [];
      for (let i = 0; i < friendsList.current.length; i++) {
        let friend = friendsList.current[i].username;
        friend = String(friend);
        friend = friend.slice(0, length);
        if (friend === current)
          friendObject.push({
            username: friendsList.current[i].username,
            _id: friendsList.current[i]._id,
          });
        setPossibleTo(friendObject);
      }
    }
  }, [currentTo]);

  function newMessageSubmit(e) {
    if (isPossible) attemptNewMessage(currentUser._id, currentTo, currentText);
  }

  function handleToChange(e) {
    setCurrentTo(e.target.value);
  }

  function handleTextChange(e) {
    setCurrentText(e.target.value);
  }

  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="page">
      <h1 className="pageTitle">Create Message</h1>

      {currentUser ? (
        <div className="page">
          <div className="newMessageFormBox">
            <form className="newMessageForm">
              <label className="formTitle">
                To:
                <input
                  className="formToInput"
                  type="text"
                  placeholder="username"
                  onChange={handleToChange}
                  value={currentTo}
                />
                <div id="myDropdown" class="show">
                  {possibleTo.map((friend, index) => {
                    let reference = `#${friend.username}`;
                    return <p href={reference}>{friend.username}</p>;
                  })}
                </div>
              </label>
              <label className="formText">
                Text:
                <textarea
                  className="formTextInput"
                  name="text"
                  id="text"
                  cols="60"
                  rows="20"
                  onChange={handleTextChange}
                ></textarea>
              </label>
            </form>
            <label>
              <button className="formSubmit" onClick={newMessageSubmit}>
                Submit
              </button>
            </label>
          </div>
        </div>
      ) : (
        <div className="signInMessage">
          <p>Must be Signed In to view this page</p>
          <Link to="/sign-in" className="signInButton">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewMessage;
