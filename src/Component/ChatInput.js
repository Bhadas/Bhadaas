import React, { useState } from "react";
import EmojiDrawer from "./EmojiDrawer";
import { post } from "../api/api";
import { ChatState } from "../context.js/chatContext";

export default function ChatInput() {
  const { selectedChat, user } = ChatState();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [message, setMessage] = useState("");
   const handleDrawerOpen = () => {
     setIsDrawerOpen(!isDrawerOpen); // Toggle the state
   };
    console.log("Emoji button clicked",isDrawerOpen);
    console.log(message)
   const sendMessage = async(key)=>{
    if(key== 'Enter' && message.length > 0){
      const res = await post('/message', {chatId : selectedChat, content: message} );
      console.log(res);
      setMessage("");
    }
   } 
  return (
    <div>
        {isDrawerOpen && (
          <EmojiDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        )}
      <div class="flex flex-row justify-between items-center p-3">
        <div class="">
          <button
            type="button"
            class="p-2 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring"
            aria-label="Upload a files"
          >
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
              <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 px-3">
          <input
            type="text"
            class="w-full border-2 border-red-300 rounded-full px-4 py-1 outline-none text-gray-500 focus:outline-none focus:ring"
            placeholder="Write a message..."
            value={message}
            onChange = {(e)=>{setMessage(e.target.value);}}
            onKeyDown= {(e)=>{sendMessage(e.key);}}
          />
        </div>
        <div class="flex flex-row">
          <button
            onClick={handleDrawerOpen}
            type="button"
            className="p-2 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring"
            aria-label="Show emojis"
          >
            <svg class="fill-current h-6 w-6" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </button>

          <button
            type="button"
            class="p-2 ml-2 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring"
            aria-label="Record a voice"
          >
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
              <path d="M10.403,15.231v2.035h2.827c0.223,0,0.403,0.181,0.403,0.404c0,0.223-0.181,0.403-0.403,0.403H6.77c-0.223,0-0.404-0.181-0.404-0.403c0-0.224,0.181-0.404,0.404-0.404h2.826v-2.035C6.89,15.024,4.751,12.758,4.751,10c0-0.223,0.181-0.403,0.404-0.403S5.559,9.777,5.559,10c0,2.449,1.992,4.441,4.441,4.441c2.449,0,4.441-1.992,4.441-4.441c0-0.223,0.182-0.403,0.404-0.403s0.403,0.18,0.403,0.403C15.248,12.758,13.108,15.024,10.403,15.231 M13.026,4.953V10c0,1.669-1.357,3.027-3.027,3.027S6.972,11.669,6.972,10V4.953c0-1.669,1.358-3.028,3.028-3.028S13.026,3.284,13.026,4.953M12.221,4.953c0-1.225-0.996-2.22-2.221-2.22s-2.221,0.995-2.221,2.22V10c0,1.225,0.996,2.22,2.221,2.22s2.221-0.995,2.221-2.22V4.953z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

