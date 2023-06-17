import React from 'react';
import UserProfile from '../components/UserProfile';
import UserPosts from '../components/UserPosts';
import '../app/globals.css'
import MainLayout from "../components/shared/mainLayout";
// import ProfilePic from "../assets/images/profile.jfif";

const UserrofilePage = () => {
  const user = {
    profilePicture: "/images/profile.jfif",
    username: 'Hadis',
    bio: 'Software Developer',
  };
  const posts = [
    {
      id: 1,
      profilePicture: "/images/profile.jfif",
      content: "Hadis",
      timestamp: "456"
    },
    {
      id: 2,
      profilePicture: "/images/profile.jfif",
      content: "Hadis",
      timestamp: "123"
    },
    {
      id: 3,
      profilePicture: "/images/profile.jfif",
      content: "Hadis",
      timestamp: "123"
    },
    {
      id: 3,
      profilePicture: "/images/profile.jfif",
      content: "Hadis",
      timestamp: "123"
    }
  ]
  return (
    <MainLayout>
      <UserProfile
        profilePicture={user.profilePicture}
        username={user.username}
        bio={user.bio}
      />
      <UserPosts posts={posts} />

    </MainLayout>
  );
};

export default UserrofilePage;