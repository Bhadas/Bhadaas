import React from 'react'

const ProfileSection = () => {
  return (
    <section class=" h-full border border-y-0  border-gray-800">
    {/* <!--Content (Center)-->
<!-- Nav back--> */}
    <div className='sticky'>
        <div class="flex justify-start ">
            <div class="px-4 py-2 mx-2 ">
                <a href="" class=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                    <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <g>
                            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                            </path>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="mx-2 ">
                <h2 class="mb-0 text-xl font-bold text-white">ℜ??????ℜ??????.dev</h2>
                <p class="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
            </div>
        </div>

        <hr class="border-gray-800" />
    </div>

    {/* <!-- User card--> */}
    <div className=''>
        <div class="w-full bg-cover bg-no-repeat bg-center" style={{height: "200px"}}>
            <img class="opacity-1 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
        </div>
        <div class="p-4">
            <div class="relative flex w-full">
                {/* <!-- Avatar --> */}
                <div class="flex flex-1">
                    <div style={{marginTop: "-6em"}}>
                        <div style={{height: "9em", width: "9em"}} class="md rounded-full relative avatar">
                            <img style={{height: "9em", width: "9em"}} class="md rounded-full relative border-4 border-gray-900" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                            <div class="absolute"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Follow Button --> */}
                <div class="flex flex-col text-right">
                    <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 items-center hover:shadow-lg font-bold py-2 px-4  mr-0 ml-auto">
                        Change Profile
                    </button>
                </div>
            </div>

            {/* <!-- Profile info --> */}
            <div class="space-y-1 justify-center w-full mt-3 ml-3">
                {/* <!-- User basic--> */}
                <div>
                    <h2 class="text-xl leading-6 font-bold text-white">ℜ??????ℜ??????.dev</h2>
                    <p class="text-sm leading-5 font-medium text-gray-600">@Ricardo_oRibeir</p>
                </div>
                {/* <!-- Description and others --> */}
          
                <div class="pt-3 flex justify-start items-start w-full">
                <button class="flex rounded border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 items-center hover:shadow-lg font-bold py-2 px-4 mr-2  mr-0 ">
                        Post
                    </button>
                    <button class="flex rounded border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 items-center hover:shadow-lg font-bold py-2 px-4 ml-2">
                        Play Ground
                    </button>
                </div>
            </div>
        </div>
        {/* <hr class="border-gray-800"> */}
    </div>
</section>
  )
}

export default ProfileSection