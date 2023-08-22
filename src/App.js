import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import LiveChat from "./pages/livechat/LiveChat";
import LeftMenu from "./pages/home/UserList";
import ChatBox from "./pages/home/ChatBox";
import Post from "./pages/posts/Post";
import SingleChat from "./pages/SingleChat/Home"
import {BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./pages/authantication/Login";
import SignUp from "./pages/authantication/SignUp";
// import Test from "./Component/Test";
import Profile from "./pages/Profile/Profile";

function App() {



  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<LiveChat/>}/>
      <Route path="/chat" element={<SingleChat/>}/>
      <Route path="/playground" element={<Home/>}/>
      <Route path="/groupchat" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      {/* <Route path="/test" element={<Test/>}/> */}
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
