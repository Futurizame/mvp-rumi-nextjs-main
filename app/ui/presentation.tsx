import React, { FC } from "react";
import { SectionContainer } from "./section-container";

export const Presentation: FC = () => {
  return (
    <SectionContainer containerClassName="p-4">
      <h1>INVIERSIONES COMPARTIDAS INMOBILIARIAS</h1>
      <p className="text-gray-500">
        Con Rumigrow puedes hacer microinversiones compartidas para proyectos
        inmobiliarios y gozar de rentas y plusvalías
      </p>
    </SectionContainer>
  );
};
