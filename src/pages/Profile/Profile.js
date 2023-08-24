import React from 'react';
import LeftBar from '../../Component/LeftBar';
import AddPost from '../posts/AddPost';
import PostCard from '../posts/PostCard';
import SearchPost from '../posts/SearchPost';
import ProfileSection from './ProfileSection';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api/api';

const Profile = () => {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
        setTimeout(()=>{
          fetchPosts();
        },3000)
    },[])


  const fetchPosts = async()=>{
    console.log(user.token)
    try{
      const response = await api.get('/posts/all-posts',{
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    })
    console.log(response.data)
      setPosts(response.data.data)
    }catch(error){
      console.log(error)
    }
  }

    return (

        <div class="flex overflow-visible h-screen bg-gray-100">
        <LeftBar />
        <div class="hidden w-4/6 overflow-y-scroll  lg:flex flex-col justify-start items-stretch border-gray-100 border-4 rounded-2xl shadow-lg">
          {/* <main role="main">
            <section> */}
            <ProfileSection />
            <AddPost fetchPosts={fetchPosts}/>
            {/* <!--Content (Center)--> */}
            <PostCard posts={posts}/>           
            {/* </section>
          </main> */}
        </div>
        <SearchPost />
      </div>
    );
};
export default Profile;
