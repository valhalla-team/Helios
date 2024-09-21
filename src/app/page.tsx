import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-end p-4">
        <ModeToggle />
      </nav>
      <div className="flex flex-col text-center w-1/3 mx-auto gap-4">
        <p>Welcome to Bruno Santos' website!</p>
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
    </main>
  );
}
