import Image from "next/image";
import Hero from "../Component/Home/Hero"
import Navbar from "@/Component/Home/Navbar";
import Footer from "@/Component/Home/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <main>
        {/* main section */}
      </main>
      <Footer />
    </div>

  );
}
