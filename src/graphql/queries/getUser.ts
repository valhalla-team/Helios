import { gql } from '@apollo/client';
import client from '../apolloClient';

const GET_USER_QUERY = gql`
  query GetUser {
    user {
      avatarUrl
    }
  }
`;

export const getUser = async (): Promise<{ avatarUrl: string }> => {
  try {
    const { data } = await client.query<{ user: { avatarUrl: string } }>({
      query: GET_USER_QUERY,
    });

    return data.user;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw new Error("Não foi possível obter os dados do usuário.");
  }
};
