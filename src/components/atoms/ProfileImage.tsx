"use client";

import React, { forwardRef } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  avatarUrl: string;
  onClick: () => void;
  alt: string;
  width: number;
  height: number;
}

const ProfileImage = forwardRef<HTMLImageElement, ProfileImageProps>(({ avatarUrl, onClick, alt, width, height }, ref) => {
  return (
    <Image
      ref={ref}
      src={avatarUrl}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full cursor-pointer"
      onClick={onClick}
      priority
    />
  );
});

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;
