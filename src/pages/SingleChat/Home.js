import React from "react";
import RightMenu from "../../Component/RightMenu";
import ChatBox from "./ChatBox";
import UserList from "./UserList";
import LeftAppBar from "../../Component/LeftAppBar";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <LeftAppBar/>
      <UserList />
      <ChatBox />
      <RightMenu />
    </div>
  );
}
