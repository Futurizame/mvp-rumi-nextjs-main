import { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <section className="p-4 ">
      <Image
        src="/logo.png"
        width={250}
        height={150}
        className="hidden md:block"
        alt="logo rumigrow"
      />
      <Image
        src="/movil.png"
        width={70}
        height={50}
        className="block md:hidden mx-auto"
        alt="logo rumigrow"
      />
    </section>
  );
};
