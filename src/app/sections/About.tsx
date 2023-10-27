import Image from "next/image";
import React from "react";
import about from "@/assets/images/about.jpeg";
import AboutPoints from "@/assets/data/AboutData";

export default function About() {
  return (
    <section
      id="about"
      className="container sm:min-h-[720px] pt-8 flex max-md:flex-col-reverse max-sm:gap-8 max-md:gap-4 max-md:px-5 max-md:py-6  items-center justify-between"
    >
      <Image
        src={about}
        alt="about map"
        width={550}
        height={450}
        className="sm:w-2/5 lg:w-[550px]"
      />
      <div className="flex flex-col w-full sm:w-1/2 lg:w-[472px]">
        <h2 className="uppercase text-base tracking-wide max-sm:text-sm">
          Est vitae vitae sagittis tellus vitae.
        </h2>
        <h1 className="text-3xl font-bold lg:text-5xl">
          Nibh libero <span className="text-primary">ornare pulvinar</span> in
          metus.
        </h1>
        <p className="text-base pt-8 pb-10">
          Risus feugiat urna ut rhoncus. Euismod leo
          <span className="font-bold">
            aliquam enim morbi tincidunt ultricies quam neque.
          </span>
          Ultrices quisque viverra non nunc. Turpis sed ultrices habitant nibh
          arcu. Quis convallis sed.
        </p>
        <ul className="sm:pl-6 lg:pl-11 flex flex-col sm:gap-3 lg:gap-6">
          {AboutPoints.map((point) => (
            <li key={point.id} className="flex gap-3">
              <Image
                src={point.Image}
                alt={point.heading}
                width={27}
                height={27}
                className="self-baseline w-[27px] h-[27px]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-extrabold text-base">{point.heading}</h3>
                <p className="font-light text-sm">{point.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
