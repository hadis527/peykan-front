import React from 'react';

const UserPosts = ({ posts }) => {

  return (

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="">
            <div className="w-48">
              <img src={post.profilePicture} alt="Your Image" className="w-full h-auto" />
            </div>
            <p className="text-center">{post.content}</p>
          </div>
        ))}
      </div>
 
  );
};

export default UserPosts;