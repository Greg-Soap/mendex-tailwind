import { ContactForm } from "@/components/ContactForm";
import React from "react";
import { LinkedinIcon } from "lucide-react";
import Socials from "@/assets/data/SocialData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container sm:min-h-[720px] py-20 flex flex-col max-md:px-5 max-md:py-6 max-md:gap-4 items-center justify-between"
    >
      <div className="flex flex-col w-full max-md:w-full">
        <h2 className="uppercase text-base tracking-wide max-sm:text-sm">
          Etiam dui faucibus egestas imperdiet.
        </h2>
        <h1 className="text-3xl font-bold md:w-[570px] lg:text-5xl">
          Imperdiet <span className="text-primary">leo nullam id amet.</span>{" "}
          Etiam pharetra.
        </h1>
        <p className="text-base pt-8 pb-10 md:w-[667px]">
          Vulputate pulvinar a, dignissim tortor, enim blandit scelerisque
          porttitor facilisi. Adipiscing id varius consectetur convallis
          scelerisque
        </p>
      </div>
      <div className="flex max-md:gap-10  max-md:flex-col w-full justify-between items-center">
        <div className=" w-full md:w-[350px] lg:w-[490px]">
          <ContactForm />
        </div>
        <div className="w-full md:w-[325px] lg:w-[465px] flex flex-col gap-10  py-8 px-5 sm:px-10 bg-background border-secondary border h-[490px] shadow-pink">
          <div className="flex flex-col gap-10">
            {Socials.map((s) => (
              <div key={s.id} className="flex flex-col gap-2">
                {s.image}
                <h2 className="font-bold text-base">{s.lead}</h2>
                <p className="text-base">{s.content}</p>
              </div>
            ))}
          </div>
          <LinkedinIcon className="text-secondary self-center" />
        </div>
      </div>
    </section>
  );
}
