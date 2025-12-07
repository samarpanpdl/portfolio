import Image from "next/image";
import UpSection from "./components/UpSection";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        <Navbar/>
        <div className="container mx-auto mt-24 px-12 py-4">
        <UpSection/>
        </div>
      </main>
  );
}
