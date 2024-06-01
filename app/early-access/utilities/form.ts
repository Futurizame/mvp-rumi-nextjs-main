import { number, object, ObjectSchema, string, ValidationError } from "yup";
import { PreRegisterFormData } from "../../../src/domain/preregistation/types";
import { tryFnSync } from "../../../src/domain/shared/try-fn";

export type PageState = "form" | "loading" | "success" | "error";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  idDocument: string;
  investmentQuantity: string;
  investmentTime: string;
  goal: string;
};

export type ErrorData = FormData;

export type FormState = {
  form: FormData;
  errors: ErrorData;
};

export const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  idDocument: "",
  investmentQuantity: "",
  investmentTime: "",
  goal: "",
};

export const initialErrorData: ErrorData = initialFormData;

export const formSchema: ObjectSchema<PreRegisterFormData> = object({
  name: string().required("El nombre es requerido"),
  email: string()
    .email("Formato de correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  phone: string().required("El número de teléfono es requerido"),
  idDocument: string().required("El documento de identidad es requerido"),
  investmentQuantity: number()
    .typeError("La cantidad de inversión debe ser un número")
    .positive("La cantidad de inversión debe ser positiva")
    .required("La cantidad de inversión es requerida"),
  investmentTime: number()
    .typeError("El plazo de inversión debe ser un número")
    .positive("El plazo de inversión debe ser positivo")
    .required("El plazo de inversión es requerido"),
  goal: string().required("El objetivo de inversión es requerido"),
}).strict();

export const mapToPreRegisterFormData = (
  formData: FormData,
): PreRegisterFormData => ({
  ...formData,
  investmentQuantity: Number(formData.investmentQuantity),
  investmentTime: Number(formData.investmentTime),
});

export const isValidationError = (error: unknown): error is ValidationError =>
  error instanceof ValidationError;

export const validateFormField = (name: string, anything: string): string => {
  const [ok, , error] = tryFnSync<unknown>(() =>
    formSchema.validateSyncAt(name, { [name]: anything }),
  );

  if (ok) {
    return "";
  }

  return error.message;
};
export const validateForm = (
  formData: FormData,
): { errorData: ErrorData; isError: boolean } => {
  const earlyAccessFormData = mapToPreRegisterFormData(formData);

  console.log(earlyAccessFormData);

  const [ok, , error] = tryFnSync(() =>
    formSchema.validateSync(earlyAccessFormData, { abortEarly: false }),
  );

  if (ok) {
    return { errorData: initialErrorData, isError: false };
  }

  if (!isValidationError(error)) {
    return { errorData: initialErrorData, isError: false };
  }

  const errors = error.inner.reduce<ErrorData>((res, ele) => {
    if (!ele.path) {
      return res;
    }

    return {
      ...res,
      [ele.path]: ele.message,
    };
  }, initialErrorData);

  return { errorData: errors, isError: true };
};
