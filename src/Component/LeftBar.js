import React from "react";

export default function LeftBar() {
  return (
    <div class="top-0 left-0 h-screen w-2/12 flex flex-col m-2 rounded-xl shadow-lg text-white bg-gray-900">
      <i class="relative flex items-center justify-center h-10 w-10 mt-8 mb-2 mx-auto text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl hover:text-white hover:rounded-xl transition-all duration-30 ease-linear;">
        BD
      </i>

      <div class="flex flex-row items-center p-4 m-2  hover:bg-red-900 hover:rounded-2xl  ">
        <i class="flex items-center justify-center h-10 w-10 mx-4  text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl ; ">
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
      </div>
      <div class="flex flex-row items-center p-4 m-2  hover:bg-red-900 hover:rounded-2xl  ">
        <i class="flex items-center justify-center h-10 w-10 mx-4  text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl ; ">
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
      </div>
      <div class="flex flex-row items-center p-4 m-2  hover:bg-red-900 hover:rounded-2xl  ">
        <i class="flex items-center justify-center h-10 w-10 mx-4  text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl ; ">
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
      </div>
      <div class="flex flex-row items-center p-4 m-2  hover:bg-red-900 hover:rounded-2xl  ">
        <i class="flex items-center justify-center h-10 w-10 mx-4  text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl ; ">
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
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </i>
        <h2 class="text-sm font-bold">AI Bot</h2>
      </div>
      <div class="flex flex-row items-center  p-4  m-2  hover:bg-red-900 hover:rounded-2xl ">
        <i class="flex items-center justify-center h-10 w-10 mx-4  text-white-500 hover:bg-green-600 bg-blue-500 rounded-xl shadow-2xl ; ">
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
      </div>
    </div>
  );
}
