import React from 'react';
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';
import { Flame } from 'lucide-react';
import ListNavItem from './ListNavItem';

interface Item {
  href: string;
  title: string;
  description: string;
}

interface FeaturedItem {
  href: string;
  title: string;
  description: string;
}

interface GenericLinkWithFeatureProps {
  items: Item[];
  featured?: FeaturedItem;
}

const GenericLinkWithFeature: React.FC<GenericLinkWithFeatureProps> = ({
  items,
  featured,
}) => (
  <NavigationMenuList>
    <NavigationMenuTrigger>News</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        {featured && (
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:scale-105 transition duration-150 ease-in-out"
                href={featured.href}
              >
                <Flame className="h-6 w-6" />
                <div className="mb-2 mt-4 text-lg font-medium">
                  {featured.title}
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {featured.description}
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        )}
        {items.map((item) => (
          <ListNavItem key={item.href} href={item.href} title={item.title}>
            {item.description}
          </ListNavItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuList>
);

export default GenericLinkWithFeature;
