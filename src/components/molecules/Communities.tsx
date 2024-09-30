"use client";

import useCommunitiesData from '@/hooks/useCommunitiesData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';
import Grid from './Grid';


export default function Communities() {
  const { community, loading, error } = useCommunitiesData();

  return (
    <Card>
      <CardHeader className="bg-accent rounded-t-sm p-1 text-center">
        <CardTitle className="text-md">Communities</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <Grid
          totalItems={6}
          data={community}
          isLoading={loading}
          hasError={error}
          label="Communities"
          defaultIcon={Building2}
        />
      </CardContent>
    </Card>
  );
}
