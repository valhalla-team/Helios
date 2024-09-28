"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MAIN_CONTENT_DATA } from "@/lib/constants"
import { ProfileCardError } from "../molecules/ProfileCard/ProfileCardError"
import { ProfileCardFallback } from "../molecules/ProfileCard/ProfileCardFallback"
import { ProfileCard } from "../molecules/ProfileCard/ProfileCard"

export default function MainContent() {
  const { welcome} = MAIN_CONTENT_DATA

  return (
    <div className="space-y-6 flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>{welcome}</CardTitle>
        </CardHeader>
        <CardContent>badges component goes here</CardContent>
      </Card>

      <Card>
        <CardContent className=" flex flex-row justify-around pt-6">
          <ProfileCardFallback />
          <ProfileCard />
          <ProfileCardError />
        </CardContent>
      </Card>
    </div>
  );
}