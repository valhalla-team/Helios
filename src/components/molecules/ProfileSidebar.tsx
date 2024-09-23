"use client";

import { RefreshCcw } from "lucide-react";
import { CustomSheet } from "../atoms/CustomSheet";
import { Button } from "../ui/button";

interface ProfileSidebarProps {
  trigger: JSX.Element;
  onLogout: () => void;
}

const ProfileSidebar = ({ trigger, onLogout }: ProfileSidebarProps) => {
  return (
    <CustomSheet
      trigger={trigger}
      content={
        <Button variant="outline" className="flex items-center">
          <RefreshCcw className="mr-2" />
          Retry
        </Button>
      }
      title="Profile Details"
      description="Here you can see your profile information."
      side="left"
    />
  );
};

export default ProfileSidebar;
