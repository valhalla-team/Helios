"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Boxes, Menu, Search } from 'lucide-react';
import { NavigationCard } from '../molecules/NavigationCard';
import { SheetToggle } from '../molecules/SheetToggle';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="bg-primary text-primary-foreground p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Link href="/" className="text-2xl font-bold">
            <Boxes className="w-6 h-6" />
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/profile">Profile</Link>
            <Link href="/friends">Friends</Link>
            <Link href="/communities">Communities</Link>
          </div>
        </div>

        <div className="space-x-4 flex items-center">
          <ThemeToggle />
          <div className="hidden md:flex space-x-4 items-center">
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-primary-foreground text-primary"
            />

            <button onClick={handleSearch} className="focus:outline-none">
              <Search className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="flex md:hidden">
          <SheetToggle trigger={<Menu />} content={<NavigationCard />} />
        </div>
      </div>
    </nav>
  );
}
