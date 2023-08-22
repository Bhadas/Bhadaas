import React from "react";
import ChatBox from "../pages/home/ChatBox";
import ChatInput from "./ChatInput";

export default function ChatHeader() {
  return (
    <div class="flex flex-row items-center justify-between px-3 py-2 bg-gray-50 rounded-t-2xl bg-opacity-50  border-gray-100">
      <div class="flex">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/24/16/34/broken-heart-6571108_640.png"
          class="h-12 w-12 rounded-full self-end"
          alt=""
        />
        <div class="ml-3">
          <h2 class="font-medium">Bhadaas group</h2>
          <p class="text-xs text-red-500">4 memebres</p>
        </div>
      </div>
      <div class="flex flex-row">
        <button
          type="button"
          class="p-2 ml-2 text-red-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring"
          aria-label="Search"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"></path>
          </svg>
        </button>
        <button
          type="button"
          class="p-2 ml-2 text-red-400 xl:text-red-700 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring"
          aria-label="Open"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <g>
              <rect fill="none" height="24" width="24" />
              <g>
                <path d="M2,4v16h20V4H2z M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z" />
              </g>
            </g>
          </svg>
        </button>
        <button
          type="button"
          class="p-2 ml-2 text-red-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring"
          aria-label="More"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="nonzero"
              d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
