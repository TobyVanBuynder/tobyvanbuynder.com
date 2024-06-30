import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { shippedProjects, navItems } from '@/data'
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid sectionId="shipped-projects" title="Shipped Projects" gridItems={shippedProjects} />
        <RecentProjects />
      </div>
    </main>
  );
}
