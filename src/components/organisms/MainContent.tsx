"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MAIN_CONTENT_DATA } from "@/lib/constants"

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
        <CardContent className="pt-6">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
            </TabsList>
            <TabsContent value="personal"></TabsContent>
            <TabsContent value="social"></TabsContent>
            <TabsContent value="professional"></TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}