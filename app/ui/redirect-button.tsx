import React, { FC } from "react";
import Link from "next/link";

type RedirectButtonProps = {
  className?: string;
};

export const RedirectButton: FC<RedirectButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link
        href={"early-access"}
        className={
          "block w-max bg-primary font-bold text-lg text-white py-4 px-8 rounded-full"
        }
      >
        ¡Quiero invertir!
      </Link>
    </div>
  );
};
