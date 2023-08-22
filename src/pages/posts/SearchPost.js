import React from 'react'

export default function SearchPost() {
  return (
    <div class="  border-4 w-2/12 rounded-xl h-screen">
        <div class="relative text-gray-300 p-5">
            <input type="search" name="search" placeholder="Search Twitter"
                class=" bg-dim-700 h-10 px-10 pr-5 w-full rounded-2xl text-sm focus:outline-none bg-purple-white shadow  border-0"/>
        </div>
        {/* <!--trending tweet section--> */}
        <div class="max-w-sm rounded-lg bg-dim-700 overflow-hidden bg-white border-2 m-4">


            <div class="text-xl text-balck flex items-center p-4">Trending</div>
            <hr class="border-gray-300"/>

            {/* <!--first trending tweet--> */}
            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-red-400">1 . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-balck">#Microsoft363</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-red-400">5,466 Posts</p>

                </div>
            </div>
            <hr class="border-gray-300"/>

            {/* <!--second trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-red-400">2 . Politics . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-balck">#HI-Fashion</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-red-400">8,464 Posts</p>

                </div>
            </div>
            <hr class="border-gray-300"/>

            {/* <!--third trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-red-400">3 . Rock . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-balck">#Ferrari</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-red-400">5,586 Posts</p>

                </div>

            </div>
            <hr class="border-gray-300"/>

            {/* <!--forth trending tweet--> */}

            <div class="flex">
                <div class="flex-1">
                    <p class="px-4 ml-2 mt-3  text-xs text-red-400">4 . Auto Racing . Trending</p>
                    <h2 class="px-4 ml-2  font-bold text-balck">#vettel</h2>
                    <p class="px-4 ml-2 mb-3  text-xs text-red-400">9,416 Posts</p>

                </div>

            </div>
            <hr class="border-gray-300"/>

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
