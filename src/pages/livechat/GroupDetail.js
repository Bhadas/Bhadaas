import React from 'react'

export default function GroupDetail() {
  return (
    // <!-- right menu  start -->

    <div class="hidden w-72 xl:block overflow-y-auto h-screen border-4 border-gray-100 rounded-xl shadow-lg">
        <main className='m-4' >
            <div class="flex flex-row justify-center items-center mx-4">
                <img src="https://cdn.pixabay.com/photo/2021/08/24/16/34/broken-heart-6571108_640.png"
                    class="w-12 h-12 mr-4 rounded-full" alt=""/>
                <h2 class="font-bold text-2xl text-white">
                    Bhadaas group
                </h2>
            </div>
            <div class="my-6">
                <ul class="flex flex-row justify-center items-center">
                    <li>
                        <button type="button"
                            class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring">
                            <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                                <path
                                    d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" />
                            </svg>
                            <p class="text-xs font-semibold">Add</p>
                        </button>
                    </li>
                    <li>
                        <button type="button"
                            class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring">
                            <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                                <path fill-rule="nonzero"
                                    d="M11,20 L13,20 C13.5522847,20 14,20.4477153 14,21 C14,21.5128358 13.6139598,21.9355072 13.1166211,21.9932723 L13,22 L11,22 C10.4477153,22 10,21.5522847 10,21 C10,20.4871642 10.3860402,20.0644928 10.8833789,20.0067277 L11,20 L13,20 L11,20 Z M3.30352462,2.28241931 C3.6693482,1.92735525 4.23692991,1.908094 4.62462533,2.21893936 L4.71758069,2.30352462 L21.2175807,19.3035246 C21.6022334,19.6998335 21.5927842,20.332928 21.1964754,20.7175807 C20.8306518,21.0726447 20.2630701,21.091906 19.8753747,20.7810606 L19.7824193,20.6964754 L18.127874,18.9919007 L18,18.9999993 L4,18.9999993 C3.23933773,18.9999993 2.77101468,18.1926118 3.11084891,17.5416503 L3.16794971,17.4452998 L5,14.6972244 L5,8.9999993 C5,7.98873702 5.21529462,7.00715088 5.62359521,6.10821117 L3.28241931,3.69647538 C2.89776658,3.3001665 2.90721575,2.66707204 3.30352462,2.28241931 Z M7.00817933,8.71121787 L7,9 L7,14.6972244 C7,15.0356672 6.91413188,15.3676193 6.75167088,15.6624466 L6.66410059,15.8066248 L5.86851709,17 L16.1953186,17 L7.16961011,7.7028948 C7.08210009,8.02986218 7.02771758,8.36725335 7.00817933,8.71121787 Z M12,2 C15.7854517,2 18.8690987,5.00478338 18.995941,8.75935025 L19,9 L19,12 C19,12.5522847 18.5522847,13 18,13 C17.4871642,13 17.0644928,12.6139598 17.0067277,12.1166211 L17,12 L17,9 C17,6.23857625 14.7614237,4 12,4 C11.3902636,4 10.7970241,4.10872043 10.239851,4.31831953 C9.72293204,4.51277572 9.14624852,4.25136798 8.95179232,3.734449 C8.75733613,3.21753002 9.01874387,2.6408465 9.53566285,2.4463903 C10.3171048,2.15242503 11.1488212,2 12,2 Z">
                                </path>
                            </svg>
                            <p class="text-xs font-semibold">Mute</p>
                        </button>
                    </li>
                    <li>
                        <button type="button"
                            class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-red-400 rounded-full hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring">
                            <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                                <g>
                                    <path d="M0,0h24v24H0V0z" fill="none" />
                                </g>
                                <g>
                                    <path
                                        d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                                </g>
                            </svg>
                            <p class="text-xs font-semibold">Leave</p>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="my-4 ">
                <ul>
                    <li class="flex flex-row my-3">
                        <div class="mr-4">
                            <img src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg"
                                class="w-12 h-12 rounded-full" alt=""/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h2 class="text-sm font-bold text-white">Jose Waldow</h2>
                            <p class="text-xs text-red-600 font-normal">Online</p>
                        </div>
                    </li>
                    <li class="flex flex-row my-3">
                        <div class="mr-4">
                            <img src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-male-fa_3249635c.jpg"
                                class="w-12 h-12 rounded-full" alt=""/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h2 class="text-sm font-bold text-white">Sherwood Rosol</h2>
                            <p class="text-xs text-red-600 font-normal">Online</p>
                        </div>
                    </li>
                    <li class="flex flex-row my-3">
                        <div class="mr-4">
                            <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
                                class="w-12 h-12 rounded-full" alt=""/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h2 class="text-sm font-bold text-white">Leena Hannan</h2>
                            <p class="text-xs text-red-400 font-normal">last seen 40 minutes ago</p>
                        </div>
                    </li>
                    <li class="flex flex-row my-3">
                        <div class="mr-4">
                            <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg"
                                class="w-12 h-12 rounded-full" alt=""/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h2 class="text-sm font-bold text-white">Yaeko Lindblom</h2>
                            <p class="text-xs text-red-400 font-normal">last seen 40 minutes ago</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col justify-between p-2 bg-gray-100 rounded-lg">
                        <div class="flex flex-row items-center p-4 my-2 bg-red-400 rounded-2xl hover:rounded-2xl cursor-pointer ">
                            <img src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg"
                            class="w-10 h-10 rounded-full mr-4" alt=""/>
                            <h2 class="text-sm font-bold text-white">Live khushi</h2>
                        </div> 
                        <div class="flex flex-row items-center  p-4 my-2 bg-red-400 rounded-2xl hover:rounded-2xl cursor-pointer ">
                            <img src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg"
                            class="w-10 h-10 rounded-full mr-4" alt=""/>
                            <h2 class="text-sm font-bold text-white">Live Neha</h2>
                        </div> 
                        <div class="flex flex-row items-center  p-4 my-2 bg-red-400 rounded-2xl hover:rounded-2xl cursor-pointer ">
                            <img src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg"
                            class="w-10 h-10 rounded-full mr-4" alt=""/>
                            <h2 class="text-sm font-bold text-white">Live Pooja</h2>
                        </div> 
             </div> 
        </main>

        {/* <!-- right menu  end --> */}
    </div>
  )
}
