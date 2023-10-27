import Image from "next/image";
import React from "react";
import ServiceData from "@/assets/data/ServicesData";
export default function Services() {
  return (
    <section
      id="services"
      className="container sm:min-h-[720px] pt-8 flex flex-col max-md:px-5 max-md:py-6 max-md:gap-4 items-center justify-between"
    >
      <div className="flex flex-col w-full max-md:w-full">
        <h2 className="uppercase text-base tracking-wide max-sm:text-sm">
          Tellus maecenas elementum feugiat.
        </h2>
        <h1 className="text-3xl font-bold sm:w-[570px] lg:text-5xl">
          Ut quis <span className="text-primary">in vitae morbi</span> erat
          tellus sit convallis.
        </h1>
        <p className="text-base pt-8 pb-10 sm:w-[667px]">
          Sit nec magna at scelerisque quam leo blandit ornare ut. Massa, risus
          blandit pharetra sodales vel in. Neque, leo malesuada eget nulla quis
          viverra sapien, fringilla et. Ipsum urna arcu sed.
        </p>
      </div>
      <div className="flex flex-wrap gap-12 justify-center">
        {ServiceData.map((s) => (
          <article
            key={s.id}
            className="relative h-[380px] shadow-pink width-[320]"
          >
            <Image src={s.image} alt={s.title} width={320} height={380} />
            <div className="absolute z-10 bottom-[22px] right-[22px] left-[22px] text-center p-6 bg-background">
              <h2 className="text-lg font-bold">{s.title}</h2>
              <p className="text-sm font-light">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
