import { NextRequest, NextResponse } from 'next/server';
import client from "@/services/apolloClient";
import { gql } from '@apollo/client';
import { z } from 'zod';
import { querySchema } from '@/services/validationSchemas';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    querySchema.parse({ query });

    const { data, errors } = await client.query({
      query: gql`${query}`,
    });

    if (errors) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
