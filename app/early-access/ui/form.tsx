"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { preRegisterHandler } from "../../../src/adapter/input/pre-register";
import { TextInput } from "./text-input";
import {
  FormState,
  initialErrorData,
  initialFormData,
  mapToPreRegisterFormData,
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

    const formData = mapToPreRegisterFormData(formState.form);

    const [ok] = await preRegisterHandler(formData);

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
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="rounded-md p-4 flex flex-col">
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

        <TextInput
          className="mb-4"
          name="investmentQuantity"
          label="Cantidad de inversión deseada"
          value={formState.form.investmentQuantity}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.investmentQuantity}
        />

        <TextInput
          className="mb-4"
          name="investmentTime"
          label="Plazo de inversión (en meses)"
          value={formState.form.investmentTime}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.investmentTime}
        />

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
