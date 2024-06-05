import { SectionContainer } from "./section-container";
import React, { FC } from "react";
import { RedirectButton } from "./redirect-button";

export const AboutUs: FC = () => {
  return (
    <SectionContainer containerClassName="p-4" className={"flex flex-col"}>
      <h2 className={"text-primary text-xl font-bold pt-4"}>SOBRE NOSOTROS</h2>
      <p className="text-text font-bold text-lg pt-2">
        Creemos en el poder de las inversiones inmobiliarias para construir un
        futuro mejor. Somos una plataforma que conecta a inversores con
        oportunidades inmobiliarias cuidadosamente seleccionadas, permitiendo
        que las personas que quieren empezar su camino como inversionistas
        participen en un mercado que antes era exclusivo para un público
        especializado y con el capital suficiente.
      </p>

      <h2 className={"text-primary text-xl font-bold pt-8"}>NUESTRA MISIÓN</h2>
      <p className="text-text font-bold text-lg pt-2">
        Democratizar el acceso a las inversiones inmobiliarias y hacer que sea
        más fácil que nunca construir su patrimonio y alcanzar sus objetivos
        financieros.
      </p>

      <h2 className={"text-primary text-xl font-bold pt-8"}>¿QUÉ OFRECEMOS?</h2>

      <ul className={"text-text font-bold text-lg list-disc pl-4 pt-2 pb-4"}>
        <li>Oportunidades de inversión diversificadas</li>
        <li>Proceso de inversión sencillo</li>
        <li>Tasas justas (más bajas del mercado)</li>
        <li>Equipo experimentado en el mercado inmobiliario</li>
      </ul>

      <p className="text-text font-bold text-lg">
        Estamos apasionados por ayudar a las personas a alcanzar sus sueños
        financieros y sabemos que las inversiones inmobiliarias son una
        excelente manera de hacerlo porque son inversiones estables y de bajo
        riesgo. Con Rumigrow, puedes invertir en ellas de manera accesible y
        construir un legado duradero para tu futuro.
      </p>

      <RedirectButton className={"pt-8 self-center pb-16"} />
    </SectionContainer>
  );
};
