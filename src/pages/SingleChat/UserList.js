import { async } from "q";
import React, { useEffect, useState } from "react";
import { get, post } from "../../api/api";
import { ChatState } from "../../context.js/chatContext";
export default function UserList() {
  const { setSelectedChat } = ChatState();
  const [userList, setUserList] = useState([]);
  const [myChats, setMyChats] = useState([]);

  const getAllUser = async()=>{
    const res = await get('/user/all-users');
    console.log(res.data);
    setUserList(res.data);
  }

  const getMyAllChats = async()=>{
    const res = await get('/chat');
    console.log(res)
    setMyChats(res.data);
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
    getAllUser();
    getMyAllChats();
  }, []);

  return (
    // <div className="flex">
      <div class="md:block h-screen hidden w-1/6 flex-col left-2 border-4 border-gray-100 rounded-xl shadow-lg bg-white">
        {/* <!-- search compt --> */}
        <div class="py-4 px-2 fixed z-50 bg-white rounded-t-lg">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-red-400 rounded-2xl w-full"
          />
        </div>
        {/* <!-- end search compt --> */}
        {/* <!-- user list --> */}
        <nav className = "mt-24">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">users</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">myChat</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className="pt-4 rounded-xl shadow-lg overflow-y-auto " style={{height : "80vh"}}>
          {
            userList?.map((item)=>(
              <>
                <div class="flex flex-row py-4 px-2 items-center" role="button" onClick={()=>{createNewChat(item._id)}}  >
                  <div class="w-1/4 mr-4">
                    <img
                      src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                      class="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div class="w-full">
                    <div class="text-sm font-bold">{item.email}</div>
                    <span class="text-xs text-gray-400 font-normal">
                      Pick me at 9:00 Am
                    </span>
                  </div>
                </div>
              </>
            ))
          }
          </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="h-full pt-4 rounded-xl shadow-lg overflow-y-auto " style={{height : "80vh"}}>
          {
            myChats?.map((item)=>(
              <>
                <div class="flex flex-row py-4 px-2 items-center" role="button" onClick={()=>{getSelectedChat(item._id)}}  >
                  <div class="w-1/4 mr-4">
                    <img
                      src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                      class="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div class="w-full">
                    <div class="text-sm font-bold">{item?.users?.[1]?.email}</div>
                    <span class="text-xs text-gray-400 font-normal">
                      Pick me at 9:00 Am
                    </span>
                  </div>
                </div>
              </>
            ))
          }
          </div>
          </div>
        </div>
       
     </div>
  );
}
