import { NextRequest, NextResponse } from 'next/server';
import client from "@/services/apolloClient";
import { gql } from '@apollo/client';

export async function POST(req: NextRequest) {
  try {
    const { query, variables } = await req.json();

    const { data, errors } = await client.query({
      query: gql`
        ${query}
      `,
      variables,
    });

    if (errors) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
