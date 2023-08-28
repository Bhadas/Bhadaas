import React, { useState } from "react";
import { Await } from "react-router-dom";
import api from "../../api/api";

const PostCard = ({ posts, fetchPosts }) => {
  const [isCommentInputVisible, setIsCommentInputVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(false);
  const [commentText, setCommentText] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleCommentInput = (postId, userId) => {
    setIsCommentInputVisible(!isCommentInputVisible);
    if (!isCommentInputVisible) {
      setCommentText("");
    }
    setSelectedPostId(postId); // Set the selected postId here if needed
  };
  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

const handlePostComment = async (postId, userId) => {
       try {
         console.log("postid", postId);
         console.log("userid", userId);
         console.log("text", commentText);
         const response = await api.post(
           "/comments/add",
           {
             text: commentText,
             postId: postId,
             userName: userId,
           },
           {
             headers: {
               Authorization: `Bearer ${user.token}`,
             },
           }
         );
                fetchPosts();
        console.log(response.data);
         setCommentText("");
         setIsCommentInputVisible(false);
       } catch (error) {
         console.log(error);
       }
};

  const handleLikeClick = async (postId, userId) => {
        try {
        console.log("postid", postId);
        console.log("userid", userId);
      const response = await api.put(
        "/posts/likes",
        {
            postId: postId,
            userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
        
      );
       fetchPosts();
      console.log("like", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);
  return (
    <>
      {posts
        .slice()
        .reverse()
        .map((item) => (
          <article
            key={item._id}
            class="hover:bg-white transition duration-350 ease-in-out"
          >
            <div class="flex flex-shrink-0 p-4 pb-0">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src={
                        item.postCreatedBy.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4KQ6Z-E4J2GU14fwgWPT1Fn2PCeGQqmFVeWAo9SAK_kKH3VBvJ2XnDgzjCrTZi9rzns&usqp=CAU"
                      }
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-base leading-6 font-medium text-black">
                      {item.postCreatedBy.username}
                      <span class="text-sm leading-5 font-large  group-hover:text-gray-300 transition ease-in-out duration-150">
                        , {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="pl-16">
              <p class="text-base width-auto font-medium text-black flex-shrink">
                {item.postDescription}
              </p>
              <div class="flex  py-4">
                <div
                  className="flex-1 flex items-center text-black text-xs hover:text-red-600 transition duration-350 ease-in-out"
                  onClick={() => handleLikeClick(item._id, user._id)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={item.isLiked ? "red" : "currentColor"}
                    className="w-5 h-5 mr-2"
                    id="like-icon"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />{" "}
                  </svg>
                  <span id="like-count">{item.numLikes}</span>
                </div>
                <div class="flex-1 flex items-center text-black text-xs  hover:text-red-400 transition duration-350 ease-in-out">
                  <svg
                    onClick={() => toggleCommentInput(item._id, user._id)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 mr-2"
                  >
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                  {item.numComments}
                </div>
              </div>
              {item._id === selectedPostId && isCommentInputVisible && (
                <div class="flex px-5 mr-3">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    class="flex-grow px-2 py-1 w-full"
                    value={commentText}
                    onChange={handleCommentChange}
                  />
                  <button class="ml-2 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      class="w-6 h-6"
                      onClick={() => handlePostComment(item._id, user._id)}
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </button>
                </div>
              )}
              <div class="grid gap-6 mb-6 md:grid-cols-2"></div>
            </div>
            <hr class="border-gray-300 m-4" />
          </article>
        ))}
    </>
  );
};

export default PostCard;
