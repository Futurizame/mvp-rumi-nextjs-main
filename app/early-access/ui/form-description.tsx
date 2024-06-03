import { FC } from "react";
import { SectionContainer } from "../../ui/section-container";

export const FormDescription: FC = () => {
  return (
    <SectionContainer containerClassName={"p-4"}>
      <h1 className={"text-primary text-xl font-bold"}>
        REGISTRO DE INVERSORES
      </h1>
      <p className="text-text font-bold text-xl pt-2">
        Rumigrow está trabajando en sus primeras inversiones inmobiliarias
        compartidas, si te interesa participar registra tus datos y te
        contactaremos pronto.
      </p>
    </SectionContainer>
  );
};
