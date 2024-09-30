import Link from 'next/link';
import { CardContent } from "@/components/ui/card";
import { NAVIGATION_LINKS } from '@/lib/constants';

type NavigationCardProps = {
  className?: string;
};

export function NavigationCard({ className }: NavigationCardProps) {
  return (
    <div
      className={`md:block relative overflow-hidden duration-300 ${className}`}
    >
      <CardContent className="relative z-10 p-2">
        <nav className="flex flex-col space-y-2 items-center justify-center h-full">
          {NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block p-2 bg-primary-foreground rounded text-center w-full hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </CardContent>
    </div>
  );
}
