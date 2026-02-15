import Image from "next/image";
import Hero from "../Component/Home/Hero"
import Navbar from "@/Component/Home/Navbar";
import Footer from "@/Component/Home/Footer";
export default function Home() {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <details>
          <summary>Product</summary>
          <ul className='p-2 bg-base-100 w-40 z-1'>
            <li>
              <a>সার</a>
            </li>
            <li>
              <a>ধানের বীজ</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

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
