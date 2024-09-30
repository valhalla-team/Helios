"use client";

import useFriendsData from '@/hooks/useFriendsData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import Grid from './Grid';


export default function Friends() {
  const { friend, loading, error } = useFriendsData();

  return (
    <Card>
      <CardHeader className="bg-accent rounded-t-sm p-1 text-center">
        <CardTitle className="text-md">Friends</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <Grid
          totalItems={6}
          data={friend}
          isLoading={loading}
          hasError={error}
          label="Placeholder"
          defaultIcon={User}
        />
      </CardContent>
    </Card>
  );
}
