import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { TextInput } from "./text-input";
import {
  FormState,
  initialErrorData,
  initialFormData,
  RawFormData,
  validateForm,
  validateFormField,
} from "../utilities/form";
import { SelectInput } from "./select-input";

type FormProps = {
  className?: string;
  onSubmit: (formData: RawFormData) => Promise<void>;
};

export const Form: FC<FormProps> = ({ className, onSubmit }) => {
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

    await onSubmit(formState.form);
  };

  return (
    <div className={className}>
      <form
        onSubmit={handleFormSubmit}
        className={
          "bg-white rounded-[40px] border-4 border-primary flex flex-col items-center"
        }
      >
        <h1 className="text-center font-bold text-2xl pt-4">
          Registro de Inversores
        </h1>

        <TextInput
          className="max-w-2xl w-full px-8 pt-4"
          name="name"
          label="Nombre completo"
          value={formState.form.name}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.name}
        />

        <TextInput
          className="max-w-2xl w-full px-8 pt-4"
          name="idDocument"
          label="Documento de identidad"
          value={formState.form.idDocument}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.idDocument}
        />

        <TextInput
          className="max-w-2xl w-full px-8 pt-4"
          name="email"
          label="Correo electrónico"
          value={formState.form.email}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.email}
        />

        <TextInput
          className="max-w-2xl w-full px-8 pt-4"
          name="phone"
          label="Número de teléfono"
          value={formState.form.phone}
          onChange={handleInputChange}
          onValidate={validateFormField}
          errorMessage={formState.errors.phone}
        />

        <SelectInput
          className="max-w-2xl w-full px-8 pt-4"
          name={"investmentQuantity"}
          label={"Cantidad disponible para invertir"}
          value={formState.form.investmentQuantity}
          onChange={handleInputChange}
          errorMessage={formState.errors.investmentQuantity}
        >
          <option value="">Seleccione una opción</option>
          <option value="menor a USD$ 300">menor a USD$ 300</option>
          <option value="USD$ 300">USD$ 300</option>
          <option value="USD$ 500">USD$ 500</option>
          <option value="USD$ 1 000">USD$ 1 000</option>
          <option value="mayor a USD$ 1 000">mayor a USD$ 1 000</option>
        </SelectInput>

        <SelectInput
          className="max-w-2xl w-full px-8 pt-4"
          name={"investmentTime"}
          label={"Plazo de inversión (en años)"}
          value={formState.form.investmentTime}
          onChange={handleInputChange}
          errorMessage={formState.errors.investmentTime}
        >
          <option value="">Seleccione una opción</option>
          <option value="3 años">3 años</option>
          <option value="5 años">5 años</option>
          <option value="6 años">6 años</option>
        </SelectInput>

        <SelectInput
          className="max-w-2xl w-full px-8 pt-4"
          name={"goal"}
          label={"Objetivo de inversión"}
          value={formState.form.goal}
          onChange={handleInputChange}
          errorMessage={formState.errors.goal}
        >
          <option value="">Seleccione una opción</option>
          <option value="income">Ingresos pasivos</option>
          <option value="appreciation">Plusvalía</option>
          <option value="both">Ambos</option>
        </SelectInput>

        <div className="max-w-2xl w-full px-8 py-8">
          <button
            type="submit"
            className="w-full bg-primary py-2 px-8 font-bold text-lg text-white rounded-full"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
