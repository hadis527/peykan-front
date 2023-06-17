import React from 'react';

const UserPosts = ({ posts }) => {

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="flex space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={post.profilePicture}
            alt="Profile Picture"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{post.username}</span>
              <span className="text-gray-500">{post.timestamp}</span>
            </div>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;