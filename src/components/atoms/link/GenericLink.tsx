import React from 'react';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../../ui/navigation-menu';
import Link from 'next/link';

interface GenericLinkProps {
  href: string;
  title: string;
  fullWidth?: boolean;
  variant?: 'trigger' | 'default';
}

const GenericLink: React.FC<GenericLinkProps> = ({
  href,
  title,
  variant = "trigger",
}) => {
  const linkClass =
    variant === "trigger"
      ? navigationMenuTriggerStyle()
      : "w-80 pl-16 block text-foreground hover:bg-accent hover:text-accent-foreground transition-colors py-2 px-4 rounded-md";

  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={`${linkClass}`}>
        {title}
      </NavigationMenuLink>
    </Link>
  );
};

export default GenericLink;
