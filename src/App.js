import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import LiveChat from "./pages/livechat/LiveChat";
import LeftMenu from "./pages/home/UserList";
import ChatBox from "./pages/home/ChatBox";
import Post from "./pages/posts/Post";
import {BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chat" element={<LiveChat/>}/>
      <Route path="/post" element={<Post/>}/>
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
