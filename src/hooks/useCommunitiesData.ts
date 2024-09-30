"use client";

import useFetchData from './useFetchData';

export interface Community {
  avatarUrl: string;
  name: string;
}

export interface CommunitiesResponse {
  organizations: Community[];
}

const GET_COMMUNITIES_QUERY = `{
  organizations {
    avatarUrl
    name
  }
}
`;

export default function useCommunitiesData() {
  const {
    data: communities,
    loading,
    error,
    loadData,
  } = useFetchData<CommunitiesResponse>(GET_COMMUNITIES_QUERY);
  
  return { community: communities?.organizations, loading, error, loadData };
}
