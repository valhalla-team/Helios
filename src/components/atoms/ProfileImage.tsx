import React, { forwardRef } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  avatarUrl: string;
  onClick: () => void;
}

const ProfileImage = forwardRef<HTMLImageElement, ProfileImageProps>(({ avatarUrl, onClick }, ref) => {
  return (
    <Image
      ref={ref}
      src={avatarUrl}
      alt="Profile"
      width={40}
      height={40}
      className="rounded-full cursor-pointer"
      onClick={onClick}
      priority
    />
  );
});

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;
