"use client";

import useFetchData from './useFetchData';

interface User {
  avatarUrl: string;
  name: string;
  email: string;
  location: string;
}

interface UserResponse {
  user: User;
}

const GET_USER_QUERY = `{
  user {
    avatarUrl
    email
    location
    name
  }
}
`;

export default function useUserData() {
  const {
    data: user,
    loading,
    error,
    loadData,
  } = useFetchData<UserResponse>(GET_USER_QUERY);
  
  return { user: user?.user, loading, error, loadData };
}
