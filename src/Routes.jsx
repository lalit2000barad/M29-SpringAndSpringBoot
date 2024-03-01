import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const Hashtags = React.lazy(() => import("pages/Hashtags"));
const Followers = React.lazy(() => import("pages/Followers"));
const ContactSharing = React.lazy(() => import("pages/ContactSharing"));
const VideoLibrary = React.lazy(() => import("pages/VideoLibrary"));
const AddFriends = React.lazy(() => import("pages/AddFriends"));
const ActivityFeed = React.lazy(() => import("pages/ActivityFeed"));
const Share = React.lazy(() => import("pages/Share"));
const FriendList = React.lazy(() => import("pages/FriendList"));
const ImageManagement = React.lazy(() => import("pages/ImageManagement"));
const Emaillogin = React.lazy(() => import("pages/Emaillogin"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/emaillogin" element={<Emaillogin />} />
          <Route path="/imagemanagement" element={<ImageManagement />} />
          <Route path="/friendlist" element={<FriendList />} />
          <Route path="/share" element={<Share />} />
          <Route path="/activityfeed" element={<ActivityFeed />} />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
          <Route path="/contactsharing" element={<ContactSharing />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/hashtags" element={<Hashtags />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
