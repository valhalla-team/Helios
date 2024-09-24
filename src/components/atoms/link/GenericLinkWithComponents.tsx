import React from 'react';
import {
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';
import ListItem from './ListNavItem';

interface Component {
  href: string;
  title: string;
  description: string;
}

interface GenericLinkWithComponentsProps {
  components: Component[];
}

const GenericLinkWithComponents: React.FC<GenericLinkWithComponentsProps> = ({
  components,
}) => (
  <NavigationMenuList>
    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {components.map((component) => (
          <ListItem
            key={component.href}
            href={component.href}
            title={component.title}
          >
            {component.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuList>
);

export default GenericLinkWithComponents;
