import { ChangeEvent, FC, PropsWithChildren } from "react";
import { clsx } from "clsx";

type FormInputProps = PropsWithChildren & {
  className?: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  errorMessage: string;
};

export const SelectInput: FC<FormInputProps> = ({
  children,
  className,
  name,
  value,
  onChange,
  errorMessage,
  label,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block font-medium pl-4">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(
          "mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm shadow-sm placeholder-gray-400",
          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
          errorMessage ? "border-red-600" : "border-gray-300",
        )}
      >
        {children}
      </select>
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
};
