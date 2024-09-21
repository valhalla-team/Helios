"use client"

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon } from 'lucide-react'
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, error } = useUser();

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; 
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 15 }}
        >
          {user && (
            <Image
              src={user.avatarUrl}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </motion.div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
