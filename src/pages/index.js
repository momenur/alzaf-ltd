import Container from "@/components/Container";
import NavBarMobile from "@/components/NavBarMobile";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='bg-[#F0F1F1]'>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar />
        <NavBarMobile />
        <Container />
      </div>
    </div>
  );
}
