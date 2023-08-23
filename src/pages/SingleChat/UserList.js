import { async } from "q";
import React, { useEffect, useState } from "react";
import api from "../../api/api";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const getAllUser = async()=>{
    const res = await api.get('/user/all-users');
    console.log(res.data);
    setUserList(res.data);
  }

  const createNewChat = async (id) => {
    
  }

  useEffect(() => {
    getAllUser();
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
        <div className="h-full pt-4 rounded-xl shadow-lg overflow-y-auto ">
          {
            userList?.map((item)=>(
              <>
                <div class="flex flex-row py-4 px-2 items-center" onClick={()=>{createNewChat(item._id)}}  >
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


        {/* <!-- end user list --> */}
      </div>
     </div>
  );
}
