"use client";

import React from 'react';
import { useFetchUserData } from '@/hooks/useFetchUserData';
import ProfileImage from '../atoms/ProfileImage';
import { Bot } from 'lucide-react';

interface AvatarGitHubProps {
  onClick: () => void;
}

const AvatarGitHub: React.FC<AvatarGitHubProps> = React.memo(({ onClick }) => {
  const { user, loading, error } = useFetchUserData();

  if (loading) {
    return <div className="animate-pulse w-10 h-10 bg-accent rounded-xl" />;
  }

  if (error || !user) {
    return <Bot className="mr-2" aria-label={error ? "Error loading user data" : "No user data available"} />;
  }

  return (
    <ProfileImage
      avatarUrl={user.avatarUrl}
      onClick={onClick}
      alt="GitHub Profile Image"
      width={40}
      height={40}
    />
  );
});

const areEqual = (prevProps: AvatarGitHubProps, nextProps: AvatarGitHubProps) => {
  return prevProps.onClick === nextProps.onClick;
};

AvatarGitHub.displayName = 'AvatarGitHub';

export default React.memo(AvatarGitHub, areEqual);
