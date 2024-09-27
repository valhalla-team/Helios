import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

type Friend = {
  id: number;
  name: string;
  avatar: string;
};

type FriendsListProps = {
  friends: Friend[];
};

export default function FriendsList({ friends }: FriendsListProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around gap-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex flex-col items-center space-y-2 p-1"
            >
              <Avatar className="h-12 w-12 bg-secondary rounded-sm flex justify-center items-center">
                <AvatarImage
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-full h-full"
                />
                <AvatarFallback className="text-xs">
                  {friend.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs">{friend.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
