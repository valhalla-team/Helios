import { AnimatedDiv } from '../atoms/animations/AnimatedDiv';
import Profile from "./Profile";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center gap-4">
        <AnimatedDiv direction="right">
          <Navbar />
        </AnimatedDiv>
        <AnimatedDiv direction="left">
          <Profile />
        </AnimatedDiv>
      </div>
    </nav>
  );
}
