import React from 'react';
import UserProfileForm from '../components/UserProfileForm';
import MainLayout from "../components/shared/mainLayout";
import '../app/globals.css'

const EditProfilePage = () => {
  const initialProfile = {
    profilePicture: '/images/profile.jfif',
    username: 'Hadis',
    bio: 'I m Hadis. I live in Iran',
  };

  const handleSave = (updatedProfile) => {
    console.log(updatedProfile);
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <UserProfileForm initialProfile={initialProfile} onSave={handleSave} />
    </MainLayout>
  );
};

export default EditProfilePage;