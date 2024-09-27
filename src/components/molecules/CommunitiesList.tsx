import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

type Community = {
  id: number;
  name: string;
  avatar: string;
};

type CommunitiesListProps = {
  communities: Community[];
};

export default function CommunitiesList({ communities }: CommunitiesListProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Communities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around sm:grid sm:grid-cols-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="flex flex-col items-center space-y-2 p-1"
            >
              <Avatar className="h-12 w-12 bg-secondary rounded-sm flex justify-center items-center">
                <AvatarImage
                  src={community.avatar}
                  alt={community.name}
                  className="w-full h-full"
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
