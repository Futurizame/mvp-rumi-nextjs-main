import { SectionContainer } from "./section-container";
import React, { FC } from "react";
import Link from "next/link";

export const AboutUs: FC = () => {
  return (
    <SectionContainer containerClassName="p-4">
      <h2>SOBRE NOSOTROS</h2>
      <p className="text-gray-500">
        Creemos en el poder de las inversiones inmobiliarias para construir un
        futuro mejor. Somos una plataforma que conecta a inversores con
        oportunidades inmobiliarias cuidadosamente seleccionadas, permitiendo
        que las personas que quieren empezar su camino como inversionistas
        participen en un mercado que antes era exclusivo para un público
        especializado y con el capital suficiente.
      </p>
      <h2>NUESTRA MISIÓN</h2>
      <p className="text-gray-500">
        Democratizar el acceso a las inversiones inmobiliarias y hacer que sea
        más fácil que nunca construir su patrimonio y alcanzar sus objetivos
        financieros.
      </p>
      <h2>¿QUÉ OFRECEMOS?</h2>
      <p className="text-gray-500">
        Oportunidades de inversión diversificadas Proceso de inversión sencillo
        Tasas justas (más bajas del mercado) Equipo experimentado en el mercado
        inmobiliario Estamos apasionados por ayudar a las personas a alcanzar
        sus sueños financieros y sabemos que las inversiones inmobiliarias son
        una excelente manera de hacerlo porque son inversiones estables y de
        bajo riesgo. Con Rumigrow, puedes invertir en ellas de manera accesible
        y construir un legado duradero para tu futuro.
      </p>

      <Link
        href={"early-access"}
        className={"block w-max bg-sky-700 text-white py-4 px-8 rounded-full"}
      >
        ¡Quiero invertir!
      </Link>
    </SectionContainer>
  );
};
