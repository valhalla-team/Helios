import LeftSidebar from "@/components/organisms/LeftSidebar";
import MainContent from "@/components/organisms/MainContent";
import Navbar from "@/components/organisms/Navbar";
import RightSidebar from "@/components/organisms/RightSidebar";

export default async function Home() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <LeftSidebar />
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
