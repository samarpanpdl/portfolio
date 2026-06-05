import Image from "next/image";
import UpSection from "./components/UpSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#1A1C1E] ">
        <Navbar/>
        <div className="container mx-auto mt-24 px-12 py-4">
        <UpSection/>
        {/* <AchievementSection/> */}
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        </div>
        <Footer/>
      </main>
  );
}
