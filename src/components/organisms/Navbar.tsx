import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import GenericLinkWithFeature from "../atoms/link/GenericLinkWithFeature";
import GenericLinkWithComponents from "../atoms/link/GenericLinkWithComponents";
import GenericLink from "../atoms/link/GenericLink";
import { items, featured, components } from "@/constants/exemplesLinks";
import MobileMenu from "../molecules/MobileMenu";

export function Navbar() {
  const mainLinks = [
    { href: "/", title: "Home" }, 
    ...items.map(item => ({ href: item.href, title: item.title })),
  ];

  return (
    <nav>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <GenericLink href="/" title="Home" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <GenericLinkWithFeature items={items} featured={featured} />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <GenericLinkWithComponents components={components} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex md:hidden">
        <MobileMenu links={mainLinks} />
      </div>
    </nav>
  );
}
