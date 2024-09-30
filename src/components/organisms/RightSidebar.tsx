import { FEATURED_PROJECT } from '@/lib/constants'
import FeaturedProject from '../molecules/FeaturedProject'
import Communities from '../molecules/Communities';
import Friends from '../molecules/Friends';

export default function RightSidebar() {
  return (
    <div className="basis-1/5 space-y-4">
      <FeaturedProject
        title={FEATURED_PROJECT.title}
        description={FEATURED_PROJECT.description}
      />
      <Friends />
      <Communities />
    </div>
  );
}