"use client";

import React from 'react';
import AvatarGitHub from '../molecules/AvatarGitHub';
import ProfileMenu from '../molecules/ProfileMenu';

const Profile = () => {
  return (
    <ProfileMenu
      trigger={<AvatarGitHub onClick={() => {}} />}
      content={<div>Profile Content Goes Here</div>}
    />
  );
};

export default Profile;
