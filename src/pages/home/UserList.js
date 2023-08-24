import React, { useEffect, useState } from "react";
import { ChatState } from "../../context.js/chatContext";
import { get, post } from "../../api/api";

export default function UserList() {
  const { setSelectedChat } = ChatState();
  const [userList, setUserList] = useState([]);
  const [myGroups, setMyGroups] = useState([]);

  const getAllUser = async()=>{
    const res = await get('/user/all-users');
    console.log(res.data);
    setUserList(res.data);
  }

  const getMyAllGroups = async()=>{
    const res = await get('/chat/allgroup');
    console.log(res)
    setMyGroups(res.data);
  }

  const createNewChat = async (id) => {
    const res = await post('/chat', {userId : id});
    console.log(res);
    if(res.statusCode === 200) {
      setSelectedChat(res.data._id);
    }
  }

  const getSelectedChat = async (id) => {
    console.log('my selected chat', id);
      setSelectedChat(id);
  }




  useEffect(() => {
    getMyAllGroups();
  }, []);
  return (
    // <div className="flex">
      <div class="md:block h-screen hidden  w-1/6 flex-col overflow-y-auto left-2 border-4 border-gray-100 rounded-xl shadow-lg bg-white">
        {/* <!-- search compt --> */}
        <div class="py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        {/* <!-- end search compt --> */}
        {/* <!-- user list --> */}
        {
          myGroups?.map((group)=>(
          <div class="flex flex-row py-4 px-2 justify-center items-center" role="button" onClick={()=>{getSelectedChat(group._id)}}>
            <div class="w-1/4 mr-4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-sm font-bold">{group?.chatName}</div>
              <span class="text-xs text-gray-400 font-normal">
                Pick me at 9:00 Am
              </span>
            </div>
          </div>
          ))
        }
      

        {/* <!-- end user list --> */}
      </div>
    // </div>
  );
}
