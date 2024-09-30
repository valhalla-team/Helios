"use client";

import useFetchData from "./useFetchData";

interface Friend {
  avatarUrl: string;
  name: string;
}

interface FriendsResponse {
  followers: Friend[];
}

const GET_FRIENDS_QUERY = `{
  followers {
    avatarUrl
    name
  }
}
`;

export default function useFriendsData() {
  const {
    data: friends,
    loading,
    error,
    loadData,
  } = useFetchData<FriendsResponse>(GET_FRIENDS_QUERY);

  return { friend: friends?.followers, loading, error, loadData };
}
