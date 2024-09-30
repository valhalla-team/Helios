"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button variant="outline" className="relative h-[2rem] w-[2rem] bg-primary-foreground" onClick={toggleTheme}>
      {isDark ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] text-primary" />
      ) : (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] text-primary" />
      )}
   </Button>
  )
}
