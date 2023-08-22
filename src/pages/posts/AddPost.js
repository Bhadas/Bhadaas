import React from 'react'

export default function AddPost() {
    return (
        <aside className='m-4 p-4 bg-white border-red-200 border-2 rounded-xl'>
            {/* <hr class="border-gray-300"/> */}
                {/* <!--middle creat tweet--> */}
                <div class="flex">
                    <div class="m-2 w-10 py-1">
                        <img class="inline-block h-10 w-10 rounded-full"
                            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                            alt="" />
                    </div>
                    <div class="flex-1 px-2 pt-2 mt-2">
                        <textarea class="caret-red-500 font-medium border-2 text-lg w-full" rows="2"
                            cols="50" placeholder="What's happening?"></textarea>
                    </div>
                </div>
                {/* <!--middle creat tweet below icons--> */}
                <div class="flex">
                    <div class="w-10"></div>

                        <div class="flex items-center">
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#"
                                    class="mt-1 group flex items-center text-red-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                  

                    <div class="flex-1">
                        <button
                            class="bg-red-400 hover:bg-red-500 mt-5 text-black font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Post
                        </button>
                    </div>
                </div>

                {/* <hr class="border-gray-100 border-4"/> */}
         </aside>
    )
}
