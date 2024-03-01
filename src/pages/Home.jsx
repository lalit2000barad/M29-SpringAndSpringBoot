import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/emaillogin">Emaillogin</Link>
        </li>
        <li>
          <Link to="/imagemanagement">ImageManagement</Link>
        </li>
        <li>
          <Link to="/friendlist">FriendList</Link>
        </li>
        <li>
          <Link to="/share">Share</Link>
        </li>
        <li>
          <Link to="/activityfeed">ActivityFeed</Link>
        </li>
        <li>
          <Link to="/addfriends">AddFriends</Link>
        </li>
        <li>
          <Link to="/videolibrary">VideoLibrary</Link>
        </li>
        <li>
          <Link to="/contactsharing">ContactSharing</Link>
        </li>
        <li>
          <Link to="/followers">Followers</Link>
        </li>
        <li>
          <Link to="/hashtags">Hashtags</Link>
        </li>
        <li>
          <Link to="/useraccount">UserAccount</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
