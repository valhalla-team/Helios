import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { CustomSheet } from "../atoms/CustomSheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import GenericLink from "../atoms/link/GenericLink";

interface MobileMenuProps {
  links: { href: string; title: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => (
  <CustomSheet
    side="left"
    trigger={
      <Button variant="ghost" size="icon" aria-label="Open Menu">
        <MenuIcon className="w-6 h-6" />
      </Button>
    }
    content={
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col space-y-4 p-6">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <GenericLink
                href={link.href}
                title={link.title}
                variant="default"
              />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    }
  />
);

export default MobileMenu;
