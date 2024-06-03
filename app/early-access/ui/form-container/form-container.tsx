"use client";

import { Description } from "../description";
import { Form } from "../form";
import { SectionContainer } from "../../../ui/section-container";
import React, { useState } from "react";
import { PageState, RawFormData } from "../../utilities/form";
import { preRegisterHandler } from "../../../../src/adapter/input/pre-register";
import Link from "next/link";
import "./styles.css";

export const FormContainer = () => {
  const [pageState, setPageState] = useState<PageState>("form");

  const handleFormSubmit = async (formData: RawFormData) => {
    setPageState("loading");

    const [ok] = await preRegisterHandler(formData);

    setPageState(ok ? "success" : "error");
  };

  return (
    <SectionContainer containerClassName={"p-4"}>
      {pageState === "form" && (
        <>
          <Description />
          <Form className={"pt-4"} onSubmit={handleFormSubmit} />
        </>
      )}

      {pageState === "loading" && (
        <div className={"flex flex-col items-center"}>
          <p className="text-text font-bold text-xl">
            Estamos enviando tus datos, por favor espera un momento.
          </p>
          <div className={"pt-16"}>
            <p className={"loader"}></p>
          </div>
        </div>
      )}

      {pageState === "success" && (
        <>
          <h1 className={"text-primary text-xl font-bold"}>REGISTRO EXITOSO</h1>
          <p className="text-text font-bold text-xl">
            Tus datos fueron registrados exitosamente. Gracias por confiar en
            nosotros. ¡Pronto nos pondremos en contacto!
          </p>
          <div className="pt-4">
            <Link
              href={"/"}
              className="block w-max bg-primary font-bold text-lg text-white py-2 px-8 rounded-full"
            >
              Regresar al inicio
            </Link>
          </div>
        </>
      )}

      {pageState === "error" && (
        <>
          <p className="text-text font-bold text-xl">
            ¡Oops! Hubo un error en tu registro, por favor, vuelve a ingresar
            tus datos.
          </p>
          <div className="pt-4">
            <button
              className="block w-max bg-primary font-bold text-lg text-white py-2 px-8 rounded-full"
              onClick={() => setPageState("form")}
            >
              Regresar al registro
            </button>
          </div>
        </>
      )}
    </SectionContainer>
  );
};
