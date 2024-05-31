import { FC } from "react";
import Link from "next/link";

export const RedirectEarlyAccessForm: FC = () => {
  return (
    <section className="flex flex-col items-center gap-2 p-4">
      <div>
        Interesado en participar?, registrate en nuestro acceso anticipado
      </div>
      <Link
        href={"early-access"}
        className="w-max p-2 px-8 rounded-full bg-black text-white"
      >
        Vamos!!!
      </Link>
    </section>
  );
};
