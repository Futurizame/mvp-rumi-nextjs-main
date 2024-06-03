"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { preRegisterHandler } from "../../../src/adapter/input/pre-register";
import { TextInput } from "./text-input";
import {
  FormState,
  initialErrorData,
  initialFormData,
  PageState,
  validateForm,
  validateFormField,
} from "../utilities/form";

const Form = () => {
  const [pageState, setPageState] = useState<PageState>("form");
  const [formState, setFormState] = useState<FormState>({
    form: initialFormData,
    errors: initialErrorData,
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormState((previousFormState) => {
      const newFormData = {
        ...previousFormState.form,
        [name]: value,
      };

      const errorMessage = validateFormField(name, value);

      console.log(newFormData);

      return {
        form: newFormData,
        errors: {
          ...previousFormState.errors,
          [name]: errorMessage,
        },
      };
    });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { isError, errorData } = validateForm(formState.form);

    if (isError) {
      setFormState((previousFormState) => ({
        ...previousFormState,
        errors: errorData,
      }));

      return;
    }

    setPageState("loading");

    const [ok] = await preRegisterHandler(formState.form);

    setPageState(ok ? "success" : "error");
  };

  if (pageState === "loading") {
    return (
      <div className="text-center">
        <p>Enviando...</p>
      </div>
    );
  }

  if (pageState === "success") {
    return (
      <div className="text-center">
        <p>¡Gracias por registrarte!</p>
      </div>
    );
  }

  if (pageState === "error") {
    return (
      <div className="text-center">
        <p>Ha ocurrido un error. Por favor, intenta de nuevo.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex  flex-col   bg-white rounded-xl shadow-md overflow-hidden border-4 border-900 py-4"
    >
      <h1 className="text-center font-bold text-900">Registro de Inversores</h1>
      <div className="rounded-md  p-4 flex flex-col">
        <TextInput
          className="mb-4"
          name="name"
          label="Nombre completo"
          value={formState.form.name}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.name}
        />

        <TextInput
          className="mb-4"
          name="idDocument"
          label="Documento de identidad"
          value={formState.form.idDocument}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.idDocument}
        />

        <TextInput
          className="mb-4"
          name="email"
          label="Correo electrónico"
          value={formState.form.email}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.email}
        />

        <TextInput
          className="mb-4"
          name="phone"
          label="Número de teléfono"
          value={formState.form.phone}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.phone}
        />

        <div className="mb-4">
          <label
            htmlFor="investmentQuantity"
            className="block text-sm font-medium"
          >
            Cantidad disponible para invertir
          </label>
          <select
            id="investmentQuantity"
            name="investmentQuantity"
            value={formState.form.investmentQuantity}
            onChange={handleInputChange}
            onBlur={(e) =>
              validateFormField("investmentQuantity", e.target.value)
            }
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              formState.errors.investmentQuantity
                ? "border-red-600"
                : "border-gray-300"
            } rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
          >
            <option value="">Seleccione una opción</option>
            <option value="menor a USD$ 300">menor a USD$ 300 </option>
            <option value="USD$ 300">USD$ 300</option>
            <option value="USD$ 500">USD$ 500</option>
            <option value="USD$ 1 000">USD$ 1 000</option>
            <option value="mayor a USD$ 1 000">mayor a USD$ 1 000</option>
          </select>
          {formState.errors.investmentQuantity && (
            <p className="text-red-600 text-sm">
              {formState.errors.investmentQuantity}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="investmentTime" className="block text-sm font-medium">
            Plazo de inversión (en años)
          </label>
          <select
            id="investmentTime"
            name="investmentTime"
            value={formState.form.investmentTime}
            onChange={handleInputChange}
            onBlur={(e) => validateFormField("investmentTime", e.target.value)}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              formState.errors.investmentTime
                ? "border-red-600"
                : "border-gray-300"
            } rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
          >
            <option value="">Seleccione una opción</option>
            <option value="3 años">3 años </option>
            <option value="5 años">5 años</option>
            <option value="6 años">6 años</option>
          </select>
          {formState.errors.investmentTime && (
            <p className="text-red-600 text-sm">
              {formState.errors.investmentTime}
            </p>
          )}
        </div>
        {/* Campo para el objetivo de inversión */}
        <div className="mb-4">
          <label htmlFor="investmentGoal" className="block text-sm font-medium">
            Objetivo de inversión
          </label>
          <select
            id="investmentGoal"
            name="goal"
            value={formState.form.goal}
            onChange={handleInputChange}
            onBlur={(e) => validateFormField("goal", e.target.value)}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              formState.errors.goal ? "border-red-600" : "border-gray-300"
            } rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
          >
            <option value="">Seleccione una opción</option>
            <option value="income">Ingresos pasivos</option>
            <option value="appreciation">Plusvalía</option>
            <option value="both">Ambos</option>
          </select>
          {formState.errors.goal && (
            <p className="text-red-600 text-sm">{formState.errors.goal}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-500 to-600 text-white py-2 px-4 rounded-md hover:from-600 hover:to-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
