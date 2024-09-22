import Navbar from "@/components/organisms/Navbar";
import { fetchUserData } from '@/services/graphqlService';

export default async function Home() {
  const user = await fetchUserData();

  return (
    <main>
      <Navbar user={user} />
    </main>
  );
}
