"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { PreRegisterFormData } from "../../../src/domain/preregistation/types";
import { preRegisterHandler } from "../../../src/adapter/input/pre-register";

type FormState = "form" | "loading" | "success" | "error";

const Form = () => {
  const [formData, setFormData] = useState<PreRegisterFormData>({
    name: "",
    email: "",
    phone: "",
    idDocument: "",
    investmentQuantity: 0,
    investmentTime: 0,
    goal: "",
  });
  const [state, setState] = useState<FormState>("form");

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState("loading");

    const [ok] = await preRegisterHandler(formData);

    setState(ok ? "success" : "error");
  };

  if (state === "loading") {
    return (
      <div className="text-center">
        <p>Enviando...</p>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="text-center">
        <p>¡Gracias por registrarte!</p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="text-center">
        <p>Ha ocurrido un error. Por favor, intenta de nuevo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Campos del formulario */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Campo para el nombre completo */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ingrese su nombre completo"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el número de teléfono */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Número de teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ingrese su número de teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para la cantidad de inversión deseada */}
        <div className="mb-4">
          <label
            htmlFor="investmentAmount"
            className="block text-sm font-medium"
          >
            Cantidad de inversión deseada
          </label>
          <input
            id="investmentAmount"
            name="investmentQuantity"
            type="number"
            placeholder="Ingrese la cantidad deseada"
            value={formData.investmentQuantity}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el plazo de inversión */}
        <div className="mb-4">
          <label htmlFor="investmentTerm" className="block text-sm font-medium">
            Plazo de inversión (en meses)
          </label>
          <input
            id="investmentTerm"
            name="investmentTime"
            type="number"
            placeholder="Ingrese el plazo en meses"
            value={formData.investmentTime}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el objetivo de inversión */}
        <div className="mb-4">
          <label htmlFor="investmentGoal" className="block text-sm font-medium">
            Objetivo de inversión
          </label>
          <select
            id="investmentGoal"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2"
          >
            <option value="">Seleccione una opción</option>
            <option value="income">Ingresos pasivos</option>
            <option value="appreciation">Plusvalía</option>
            <option value="both">Ambos</option>
          </select>
        </div>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
