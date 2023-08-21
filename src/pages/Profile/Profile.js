import React from 'react';
import LeftBar from '../../Component/LeftBar';
import AddPost from '../posts/AddPost';
import PostCard from '../posts/PostCard';
import SearchPost from '../posts/SearchPost';
import ProfileSection from './ProfileSection';

const Profile = () => {
    return (

        <div class="flex overflow-visible h-screen bg-gray-100">
        <LeftBar />
        <div class="hidden w-4/6 overflow-y-scroll bg-slate-900 lg:flex flex-col justify-start items-stretch border-gray-100 border-4 rounded-2xl shadow-lg">
          {/* <main role="main">
            <section> */}
            <ProfileSection />
              <AddPost/>
              {/* <!--Content (Center)--> */}
              <PostCard/>           
              <PostCard/>           
              <PostCard/>           
              <PostCard/>           
            {/* </section>
          </main> */}
        </div>
        <SearchPost />
      </div>
    );
};
export default Profile;
