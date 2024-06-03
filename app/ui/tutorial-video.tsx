import React, { FC } from "react";
import { SectionContainer } from "./section-container";
import { RedirectButton } from "./redirect-button";

export const TutorialVideo: FC = () => {
  return (
    <SectionContainer
      containerClassName={"p-4 pb-8 bg-accent"}
      className={"flex flex-col"}
    >
      <h2 className={"text-primary text-xl font-bold pb-8"}>¿CÓMO FUNCIONA?</h2>

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/cizFKf09-qA"
        title="Qué es RumiGrow"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-hidden="true"
      ></iframe>

      <RedirectButton className={"pt-8 self-center"} />
    </SectionContainer>
  );
};
