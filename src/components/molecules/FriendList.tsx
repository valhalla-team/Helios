"use client";

import useFriendsData from '@/hooks/useFriendsData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';


export default function FriendsList() {
  const { friend, loading, error } = useFriendsData();
  if (loading) {
    return <span>Loading ...</span>;
  }

  if (error) {
    return <span>Failed to fetch data.</span>;
  }

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around sm:grid sm:grid-cols-6 md:grid md:grid-cols-3 lg:grid gap-4">
          {friend?.map((friend) => (
            <div
              key={friend.name}
              className="flex flex-col items-center space-y-2 p-1"
            >
              <Avatar className="h-12 w-12 bg-secondary rounded-sm flex justify-center items-center">
                <AvatarImage
                  src={friend.avatarUrl}
                  alt={friend.name}
                  className="w-full h-full rounded-md"
                />
                <AvatarFallback className="text-xs">
                  {friend.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs max-w-[7ch] truncate">
                {friend.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
