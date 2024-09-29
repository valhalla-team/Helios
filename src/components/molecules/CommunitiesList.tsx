"use client";

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import useCommunitiesData from '@/hooks/useCommunitiesData';

export default function CommunitiesList() {
  const { community, loading, error } = useCommunitiesData();
  
  if (loading) {
    return <span>Loading ...</span>;
  }

  if (error) {
    return <span>Failed to fetch data.</span>;
  }

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Communities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around sm:grid sm:grid-cols-6 md:grid md:grid-cols-3 gap-4">
          {community?.map((community) => (
            <div
              key={community.name}
              className="flex flex-col items-center space-y-2 p-1"
            >
              <Avatar className="h-12 w-12 bg-secondary rounded-sm flex justify-center items-center">
                <AvatarImage
                  src={community.avatarUrl}
                  alt={community.name}
                  className="w-full h-full rounded-md"
                />
                <AvatarFallback className="text-xs">
                  {community.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs max-w-[7ch] truncate">
                {community.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}