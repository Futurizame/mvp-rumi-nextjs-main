import { ChangeEvent, FC } from "react";

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
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 bg-white border ${
          errorMessage ? "border-red-600" : "border-gray-300"
        } rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-900 focus:ring-1 focus:ring-900`}
      />
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
};
