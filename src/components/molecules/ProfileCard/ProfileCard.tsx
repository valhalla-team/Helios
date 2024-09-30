"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import useFetchUserData from "@/hooks/useUserData";
import { ProfileCardFallback } from "./ProfileCardFallback";
import { ProfileCardError } from "./ProfileCardError";

export function ProfileCard() {
  const { user, loading, error } = useFetchUserData();

  if (loading) {
    return <ProfileCardFallback />;
  }

  if (error || !user) {
    return <ProfileCardError />;
  }

  return (
    <Card className="relative overflow-hidden transition-all duration-300">
      <CardContent className="relative z-10 p-4">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center md:text-start">
            <h2 className="mt-2 text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground">{user.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}