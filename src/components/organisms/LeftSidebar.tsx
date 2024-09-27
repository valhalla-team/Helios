import { ProfileCard } from "../molecules/ProfileCard/ProfileCard";
import { NavigationCard } from "../molecules/NavigationCard";
import ApplicationsList from "../molecules/ApplicationsList";
import { APP_DATA } from "@/lib/constants";

export default function LeftSidebar() {
  return (
    <div className="relative basis-1/12 space-y-4">
      <ProfileCard />
      <NavigationCard className="hidden"/>
      <ApplicationsList applications={APP_DATA} />
    </div>
  )
}
