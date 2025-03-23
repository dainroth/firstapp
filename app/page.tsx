import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Link href="/contact">Go to contact</Link>
      <Menu/>    
    </div>
  );
}
