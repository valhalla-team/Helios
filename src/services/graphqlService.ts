import { GET_USER_QUERY } from "@/constants/graphqlQueries";

export async function fetchUserData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_FRONTEND}/${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_FRONTEND}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GET_USER_QUERY,
        }),
      }
    );

    const result = await response.json();
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
    
    return result.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
