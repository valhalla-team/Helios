"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MAIN_CONTENT_DATA } from "@/lib/constants"

export default function MainContent() {
  const { welcome} = MAIN_CONTENT_DATA

  return (
    <div className="space-y-6 basis-1/2 flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>{welcome}</CardTitle>
        </CardHeader>
        <CardContent>badges component goes here</CardContent>
      </Card>

      <Card>
        <CardContent className=" flex flex-row justify-around pt-6">
          Main Content
        </CardContent>
      </Card>
    </div>
  );
}