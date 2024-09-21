import { gql } from '@apollo/client';
import client from '../apolloClient';
import { User, UserResponse } from '../types/user';

const GET_USER_QUERY = gql`
  query GetUser {
    user {
      avatarUrl
    }
  }
`;

export const getUser = async (): Promise<User> => {
  try {
    const { data } = await client.query<UserResponse>({
      query: GET_USER_QUERY,
    });

    return data.user;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw new Error("Não foi possível obter os dados do usuário.");
  }
};
