import React from 'react'

export default function SearchPost() {
  return (
    <div class=" bg-slate-900 m-2 w-2/12 rounded-xl h-screen">
        <div class="relative text-gray-300 p-5">
            <input type="search" name="search" placeholder="Search Twitter"
                class=" bg-dim-700 h-10 px-10 pr-5 w-full rounded-2xl text-sm focus:outline-none bg-purple-white shadow  border-0"/>
        </div>
        {/* <!--trending tweet section--> */}
        <div class="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">


            <div class="text-xl text-stone-50 flex items-center">Trending</div>
            <hr class="border-gray-800"/>

            {/* <!--first trending tweet--> */}
            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-gray-400">1 . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-white">#Microsoft363</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-gray-400">5,466 Tweets</p>

                </div>
            </div>
            <hr class="border-gray-800"/>

            {/* <!--second trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-gray-400">2 . Politics . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-white">#HI-Fashion</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-gray-400">8,464 Tweets</p>

                </div>
            </div>
            <hr class="border-gray-800"/>

            {/* <!--third trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-gray-400">3 . Rock . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-white">#Ferrari</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-gray-400">5,586 Tweets</p>

                </div>

            </div>
            <hr class="border-gray-800"/>

            {/* <!--forth trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-gray-400">4 . Auto Racing . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-white">#vettel</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-gray-400">9,416 Tweets</p>

                </div>

            </div>
            <hr class="border-gray-800"/>

            {/* <!--show more--> */}

            <div class="flex">
                <div class="flex-1 p-4">
                    <h2 class="px-4 ml-2  font-bold text-blue-400">Show more</h2>
                </div>
            </div>

        </div>
    </div>
  )
}
