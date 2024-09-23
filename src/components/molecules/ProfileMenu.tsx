import { CustomSheet } from "@/components/atoms/CustomSheet";

interface ProfileMenuProps {
  trigger: JSX.Element;
  content?: JSX.Element;
}

const ProfileMenu = ({ trigger, content }: ProfileMenuProps) => {
  return (
    <CustomSheet
      trigger={trigger}
      content={content}
      side="right"
    />
  );
};

export default ProfileMenu;