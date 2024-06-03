import React, { FC } from "react";
import { SectionContainer } from "./section-container";

export const Presentation: FC = () => {
  return (
    <SectionContainer containerClassName="pt-8 px-4 pb-8">
      <h1 className={"text-4xl font-bold text-secondary"}>
        INVIERSIONES COMPARTIDAS INMOBILIARIAS
      </h1>
      <p className="text-text pt-8 font-bold text-xl">
        Con Rumigrow puedes hacer microinversiones compartidas para proyectos
        inmobiliarios y gozar de rentas y plusvalías
      </p>
    </SectionContainer>
  );
};
