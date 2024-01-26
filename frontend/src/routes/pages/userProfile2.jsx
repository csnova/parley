import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import viewIcon from "../../assets/show.png";
import getProfileDetails from "../getRequests/getProfileDetails";
import getFriendStatus from "../getRequests/getFriendStatus";
import useAddFriend from "../postRequests/postAddFriend";
import useRemoveFriend from "../postRequests/postRemoveFriend";

const UserProfile2 = ({
  currentUser,
  userViewed,
  setUserViewed,
  setCurrentTo,
  setCurrentFriend,
}) => {
  const { profileDetails, error, loading } = getProfileDetails(
    userViewed,
    false
  );
  const { friendStatus, error1, loading1 } = getFriendStatus(
    currentUser._id,
    userViewed
  );
  const { attemptAddFriend } = useAddFriend();
  const { attemptRemoveFriend } = useRemoveFriend();
  const [requestSent, setRequestSent] = useState(false);

  function addFriendSubmit(e) {
    attemptAddFriend(currentUser._id, userViewed);
    setRequestSent(true);
  }

  function removeFriendSubmit(e) {
    attemptRemoveFriend(currentUser._id, userViewed);
  }

  function newMessage(e) {
    setCurrentTo(profileDetails.profile[0].user.username);
    setCurrentFriend(userViewed);
  }

  if (error) return <p>A Network Error has occurred. </p>;
  if (loading) return <p>Loading...</p>;
  if (error1) return <p>A Network Error has occurred. </p>;
  if (loading1) return <p>Loading...</p>;
  return (
    <div className="page">
      {currentUser ? (
        <div>
          {friendStatus ? (
            <div className="profileBar">
              <h1 className="pageTitle">
                Profile: {profileDetails.profile[0].user.username}
              </h1>
              <button id="userLink" onClick={newMessage}>
                <Link to="/newMessage">Send Message</Link>
              </button>
              <button id="userLink" onClick={removeFriendSubmit}>
                <Link to="/friendsList">Remove Friend</Link>
              </button>
            </div>
          ) : (
            <div className="profileBar">
              <h1 className="pageTitle">
                Profile: {profileDetails.profile[0].user.username}
              </h1>
              {requestSent ? (
                <button id="userLink">Request Sent</button>
              ) : (
                <button id="userLink" onClick={addFriendSubmit}>
                  Add
                </button>
              )}
            </div>
          )}
          <div className="tableBox">
            <table className="genericTable">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{profileDetails.profile[0].name}</td>
                </tr>
                <tr>
                  <th>Bio</th>
                  <td>{profileDetails.profile[0].bio}</td>
                </tr>
                <tr>
                  <th>Favorite Band</th>
                  <td>{profileDetails.profile[0].band}</td>
                </tr>
                <tr>
                  <th>Favorite Movie</th>
                  <td>{profileDetails.profile[0].movie}</td>
                </tr>
                <tr>
                  <th>Favorite Book</th>
                  <td>{profileDetails.profile[0].book}</td>
                </tr>
              </tbody>
            </table>

            <br />
            <h2 className="tableTitle">Friends</h2>
            <table className="genericTable">
              <thead>
                <tr>
                  <th>User</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {profileDetails.friends.map((friend, index) => {
                  if (friend._id === currentUser._id) return;
                  function onUserClick(e) {
                    let userID = e.target.className;
                    setUserViewed(userID);
                  }

                  let friendClass = friend._id;

                  return (
                    <tr key={friend._id}>
                      <td>{friend.username}</td>
                      <td>
                        <button onClick={onUserClick}>
                          <Link to="/userProfile1">
                            <img
                              src={viewIcon}
                              alt="link to view user profile"
                              id="tableIcon"
                              className={friendClass}
                            />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="signInMessage">
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

export default UserProfile2;
