import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import LiveChat from "./pages/livechat/LiveChat";
import Post from "./pages/posts/Post";
import SingleChat from "./pages/SingleChat/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/authantication/Login";
import SignUp from "./pages/authantication/SignUp";
// import Test from "./Component/Test";
import Profile from "./pages/Profile/Profile";
import ChatProvider from "./context.js/chatContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChatProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<LiveChat />} />
            <Route path="/chat" element={<SingleChat />} />
            <Route path="/playground" element={<Home />} />
            <Route path="/groupchat" element={<Home />} />
            <Route path="/post" element={<Post />} />
            {/* <Route path="/test" element={<Test/>}/> */}
            <Route path="/Profile" element={<Profile />} />
            {/* <Route path="/landing" element={<LandingPage/>}/> */}
          </Routes>
        </ChatProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
