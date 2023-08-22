import React from "react";

export default function UserList() {
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
        <div class="flex flex-row py-4 px-2 justify-center items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Luis1994</div>
            <span class="text-xs text-gray-400 font-normal">
              Pick me at 9:00 Am
            </span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/otT2199XwI8/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Everest Trip 2021</div>
            <span class="text-xs text-gray-400 font-normal">
              Hi Sam, Welcome
            </span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">MERN Stack</div>
            <span class="text-xs text-gray-400 font-normal">
              Lusi : Thanks Everyone
            </span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center">
          <div class="w-1/4 mr-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-sm font-bold">Javascript Indonesia</div>
            <span class="text-xs text-gray-400 font-normal">
              Evan : some one can fix this
            </span>
          </div>
        </div>

        {/* <!-- end user list --> */}
      </div>
    // </div>
  );
}
