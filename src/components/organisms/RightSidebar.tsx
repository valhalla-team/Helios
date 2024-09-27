import CommunitiesList from '@/components/molecules/CommunitiesList'
import { FRIENDS_DATA, COMMUNITIES_DATA, FEATURED_PROJECT } from '@/lib/constants'
import FriendsList from '../molecules/FriendList'
import FeaturedProject from '../molecules/FeaturedProject'

export default function RightSidebar() {
  return (
    <div className="w-full md:w-64 space-y-4">
      <FeaturedProject
        title={FEATURED_PROJECT.title}
        description={FEATURED_PROJECT.description}
      />
      <FriendsList friends={FRIENDS_DATA} />
      <CommunitiesList communities={COMMUNITIES_DATA} />
    </div>
  );
}