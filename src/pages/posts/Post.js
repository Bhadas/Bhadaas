import React from "react";
import LeftBar from "../../Component/LeftBar";
import SearchPost from "./SearchPost";
import AddPost from "./AddPost";
import PostCard from "./PostCard";

const Post = () => {
  return (
    <div class="flex bg-gray-100">
      <LeftBar />
      <div class="hidden w-4/6 bg-slate-900 lg:flex flex-col justify-start items-stretch border-gray-100 border-4 rounded-2xl shadow-lg">
        {/* <main role="main">
          <section> */}
            <AddPost/>
            {/* <!--Content (Center)--> */}
            <PostCard/>           
          {/* </section>
        </main> */}
      </div>
      <SearchPost />
    </div>
  );
};

export default Post;
