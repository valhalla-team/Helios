"use client";

import { useEffect, useState } from 'react';
import { fetchUserData } from '@/services/graphqlService';
import ProfileSidebar from '../molecules/ProfileSidebar';
import ProfileImage from '../atoms/ProfileImage';
import { Bot } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState<{ avatarUrl: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [customError, setError] = useState(false);

  const loadUserData = async () => {
    setLoading(true);
    setError(false);
    try {
      const userData = await fetchUserData();
      setUser(userData);
    } catch (error) {
      console.error(customError);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleRetry = () => {
    loadUserData();
  };

  if (loading) {
    return <div className="animate-pulse w-10 h-10 bg-accent rounded-full" />;
  }

  return (
    <ProfileSidebar
      trigger={
        user ? (
          <ProfileImage avatarUrl={user.avatarUrl} onClick={() => {}} />
        ) : (
            <Bot className="mr-2" onClick={() => {}} />
        )
      }
      onLogout={handleRetry}
    />
  );
};

export default Profile;
