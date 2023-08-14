import React from "react";
import LeftBar from "../../Component/LeftBar";
import ChatHeader from "../../Component/ChatHeader";
import ChatInput from "../../Component/ChatInput";
import GroupDetail from "./GroupDetail";

function LiveChat() {
  return (
    <div class="flex bg-stone-600">
      <LeftBar />
      {/* <!-- massage section --> */}
      <div
        class="image hidden w-4/6 lg:flex flex-col justify-start items-stretch border-gray-100  m-2 rounded-2xl shadow-lg"
      >
        {/* <!-- Header with name --> */}
        <ChatHeader />
        {/* <!-- Messages --> */}
        <div class="flex-auto flex flex-row justify-between overflow-y-auto ">
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
                  <h2 class="text-sm font-bold">Jose Waldow</h2>
                  <p class="text-xs text-blue-600 font-normal">Online</p>
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
                  <h2 class="text-sm font-bold">Sherwood Rosol</h2>
                  <p class="text-xs text-blue-600 font-normal">Online</p>
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
                  <h2 class="text-sm font-bold">Leena Hannan</h2>
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
                  <h2 class="text-sm font-bold">Yaeko Lindblom</h2>
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
                  <h2 class="text-sm font-bold">Sherwood Rosol</h2>
                  <p class="text-xs text-blue-600 font-normal">Online</p>
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
                  <h2 class="text-sm font-bold">Sherwood Rosol</h2>
                  <p class="text-xs text-blue-600 font-normal">Online</p>
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
                  <h2 class="text-sm font-bold">Leena Hannan</h2>
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
                  <h2 class="text-sm font-bold">Yaeko Lindblom</h2>
                  <p class="text-xs text-gray-400 font-normal">
                    last seen 40 minutes ago
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Input for writing a messages --> */}
        <ChatInput />
      </div>
      {/* <!-- massage section end --> */}
      {/* <!-- right menu  start --> */}
      <GroupDetail />
    </div>
  );
}

export default LiveChat;
