
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  
  return (
    <section
      id="hero"
      className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white pt-8"
    >
      <div className="flex flex-col border md:flex-row justify-center items-center md:py-20 p-12 md:px-32">
        <div className="text-center md:text-left mx-20 sm:text-center  w-full md:w-1/2 mb-10 md:mb-0 ">
          <h1 className="text-5xl md:text-4xl font-bold mb-4">
            Smart Digital Watch for Luxurious Life
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-md ">
          Luxora adalah jam tangan pintar digital yang dirancang untuk mendukung gaya hidup aktif. 
          </p>
          <Link href="#about">
            <Button size={"md"} variant={"white"}>Gets Started</Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/jamHero.png"
            alt="jam tangan digital luxora dengan fitur inovatif"
            width={450}
            height={450}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
