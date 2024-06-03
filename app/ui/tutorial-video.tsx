import React, { FC } from "react";
import { SectionContainer } from "./section-container";
import Link from "next/link";

export const TutorialVideo: FC = () => {
  return (
    <SectionContainer
      containerClassName={"p-4 bg-green-50"}
      className={"flex flex-col gap-4"}
    >
      <h2>¿CÓMO FUNCIONA?</h2>

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/cizFKf09-qA"
        title="Qué es RumiGrow"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-hidden="true"
      ></iframe>

      <Link
        href={"early-access"}
        className={"w-max bg-sky-700 text-white py-4 px-8 rounded-full"}
      >
        ¡Quiero invertir!
      </Link>
    </SectionContainer>
  );
};
