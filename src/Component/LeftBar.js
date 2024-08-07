import React, { useState } from "react";

export default function LeftBar() {
  // const [bgColor, setBgClor] = useState(false);
  return (
    <div class="top-0 left-0 h-screen bg-blue-950 w-2/12 flex flex-col justify-between border-4 border-gray-100 rounded-xl shadow-lg text-white ">
      <div>
        <i class="relative flex items-center justify-center  mb-2 mx-auto text-white-500 rounded-xl shadow-2xl hover:text-white hover:rounded-xl transition-all duration-30 ease-linear;">
          {/* <BhadaasLogo/> */}
          <img
            class=""
            src={require('../Image/Bhadas1.png')}
            alt=""
          />
        </i>

        <a href="/" class="flex flex-row items-center p-4 m-2  hover:bg-red-700 hover:rounded-2xl  ">
          <i class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
          </i>
          <h2 class="text-sm font-bold">Playground</h2>
        </a>
        <a href="/chat" class="flex flex-row items-center p-4 m-2  hover:bg-red-700 hover:rounded-2xl  ">
          <i class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </i>
          <h2 class="text-sm font-bold">Chat</h2>
        </a>
        <a href="/groupchat" class="flex flex-row items-center p-4 m-2  hover:bg-red-700 hover:rounded-2xl  ">
          <i class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </i>
          <h2 class="text-sm font-bold">Community Chat</h2>
        </a>
        <a href="/post" class="flex flex-row items-center p-4 m-2  hover:bg-red-700 hover:rounded-2xl  ">
          <i
            class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </i>
          <h2 class="text-sm font-bold">Post</h2>
        </a>
        <a href="#" class="flex flex-row items-center  p-4  m-2  hover:bg-red-700 hover:rounded-2xl ">
          <i class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </i>
          <h2 class="text-sm font-bold">Make Group</h2>
        </a>
      </div>
      <div>

        <a href="/profile" class="flex flex-row items-center  p-4  m-2  hover:bg-red-700 hover:rounded-2xl ">
          <i class="flex items-center justify-center h-10 w-10 mx-2  text-white-500   rounded-xl shadow-2xl ; ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </i>
          <h2 class="text-sm font-bold">Profile</h2>
        </a>
      </div>
    </div>
  );
}
