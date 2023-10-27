import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hero from "@/assets/images/hero.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container md:min-h-max flex max-md:flex-col max-md:px-5 max-md:py-6 max-md:gap-4 items-center justify-between"
    >
      <div className="flex flex-col gap-4 w-full sm:w-5/12 lg:w-[472px]">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Mi tellus egestas lectus enim, magna ultrices
        </h1>
        <p className="text-base">
          Amet faucibus aenean ultricies lectus malesuada ipsum. Mattis eget
          adipiscing dui egestas nibh nunc condimentum ornare. Vel integer velit
          varius duis in urna, condim.
        </p>
        <Button variant={"default"} className="mt-[14px] w-fit">
          <Link href={"#contact"}>Contact Us</Link>
        </Button>
      </div>
      <Image
        src={hero}
        alt="hero"
        width={518}
        height={607}
        priority
        className="sm:w-1/2 lg:w-[518px]"
      />
    </section>
  );
}
