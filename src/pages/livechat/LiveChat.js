import React, { useEffect, useState } from "react";
import LeftBar from "../../Component/LeftBar";
import ChatHeader from "../../Component/ChatHeader";
import ChatInput from "../../Component/ChatInput";
import GroupDetail from "./GroupDetail";
import BgAnimation from "./BgAnimation";
  import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { ChatState } from "../../context.js/chatContext";


function LiveChat() {
  const { user } = ChatState();
  
  const navigate= useNavigate()
  
  // const checkUser = ()=>{
  //   if(!user){
  //     navigate('/login')
  //   }
  // }
  // useEffect(() => {
  //   checkUser();
  // }, []);
 


  return (
    <div class="flex bg-blue-950">
      <LeftBar />
      {/* <!-- massage section --> */}



      <div class="  hidden  w-4/6 lg:flex flex-col justify-start items-stretch h-screen  border-4 border-gray-100 rounded-2xl shadow-lg">

        <div className="flex justify-end m-4">
          <svg
            class="w-6 h-6 fill-current bg-red-500 rounded-xl "
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="nonzero"
              d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"
            />
          </svg>
        </div>
        <BgAnimation />
        {/* <!-- Messages --> */}
        <div class="flex-auto flex flex-row justify-between overflow-y-auto z-1 ">
          <div class="m-4 flex ">
            <ul class="flex flex-col justify-end ">
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Jose Waldow</h2>
                  <p class="text-xs text-red-400 font-normal">Online</p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-male-fa_3249635c.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Sherwood Rosol</h2>
                  <p class="text-xs text-red-400 font-normal">Online</p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Leena Hannan</h2>
                  <p class="text-xs text-gray-400 font-normal">
                    last seen 40 minutes ago
                  </p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Yaeko Lindblom</h2>
                  <p class="text-xs text-gray-400 font-normal">
                    last seen 40 minutes ago
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="m-4 flex">
            <ul class="flex flex-col justify-end">
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-male-fa_3249635c.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Sherwood Rosol</h2>
                  <p class="text-xs text-red-400 font-normal">Online</p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-male-fa_3249635c.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Sherwood Rosol</h2>
                  <p class="text-xs text-red-400 font-normal">Online</p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Leena Hannan</h2>
                  <p class="text-xs text-gray-400 font-normal">
                    last seen 40 minutes ago
                  </p>
                </div>
              </li>
              <li class="flex flex-row my-3">
                <div class="mr-4">
                  <img
                    src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg"
                    class="w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h2 class="text-sm font-bold text-white">Yaeko Lindblom</h2>
                  <p class="text-xs text-gray-400 font-normal">
                    last seen 40 minutes ago
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Input for writing a messages --> */}
        <ChatInput style={{ zIndex: 1 }} />
      </div>
      {/* <!-- massage section end --> */}
      {/* <!-- right menu  start --> */}
      <GroupDetail />
    </div>
  );
}

export default LiveChat;
