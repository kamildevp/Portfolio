import Button from "@/components/button";
import NameHeader from "@/components/name-header";
import ProjectsSection from "@/components/projects-section";
import SocialsHeader from "@/components/socials-header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col font-sans">
      <div className="flex flex-row justify-between align-baseline flex-wrap">
        <div 
          className="md:flex-1 p-4 order-2 md:order-1 animate-fadeIn opacity-0"
          style={{animationDelay: "1.2s"}}
        >
          <Link href="/resume.pdf" target="_blank" >
            <Button text="My Resume" />
          </Link>
        </div>
        <div className="order-1 md:order-2 w-full md:w-auto">
          <NameHeader />
        </div>
        <div className="md:flex-1 order-3">
          <SocialsHeader />
        </div>
      </div>
      <div>
        <ProjectsSection />
      </div>
    </div>
  );
}
