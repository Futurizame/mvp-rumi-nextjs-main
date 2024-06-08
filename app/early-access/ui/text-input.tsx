import { ChangeEvent, FC } from "react";
import { clsx } from "clsx";

type FormInputProps = {
  className?: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onValidate?: (name: string, value: string) => string;
  errorMessage: string;
};

export const TextInput: FC<FormInputProps> = ({
  className,
  name,
  label,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block font-medium pl-4">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
        className={clsx(
          "mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm shadow-sm placeholder-gray-400",
          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
          errorMessage ? "border-red-600" : "border-gray-300",
        )}
      />
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
};
