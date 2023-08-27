import React from "react";
import LeftBar from "../../Component/LeftBar";
import SearchPost from "./SearchPost";
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api/api";
import LoadingAnimation from "../../Component/LoadingAnimation";

const Post = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
        setTimeout(()=>{
          fetchPosts();
        },3000)
    },[])


  const fetchPosts = async()=>{
    setIsLoading(true)
    console.log(user.token)
    try{
      const response = await api.get('/posts/all-posts',{
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    })
    console.log("<<<<<",response.data)
      setPosts(response.data.data)
    }catch(error){
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }

  return (
    <div class="flex bg-gray-100">
      <LeftBar />
      <div class="hidden w-4/6 overflow-y-scroll h-screen lg:flex flex-col justify-start items-stretch border-gray-200 border-4 rounded-2xl shadow-lg">
        {/* <main role="main">
          <section> */}
        <div class="flex">
          <div class="flex-1 mx-2">
            <h2 class="px-4 py-2 text-xl font-semibold text-black">Home</h2>
          </div>
          <div class="flex-1 px-4 py-2 mx-2">
            <a
              href=""
              class=" text-2xl font-medium rounded-full text-black  hover:text-blue-300 float-right"
            >
              <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <g>
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <hr class="border-red-300 m-4" />
        <AddPost fetchPosts={fetchPosts} />
        {/* <!--Content (Center)--> */}
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <PostCard posts={posts} fetchPosts={fetchPosts} />
        )}
        {/* </section>
        </main> */}
      </div>
      <SearchPost />
    </div>
  );
};

export default Post;
