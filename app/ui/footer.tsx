import image from "./logo-white.png";
import Image from "next/image";
import { clsx } from "clsx";
import { SectionContainer } from "./section-container";

export const Footer = () => {
  return (
    <SectionContainer
      containerClassName={"bg-text text-white"}
      className={clsx(
        "flex",
        "flex-col gap-8 p-4 py-12",
        "sm:flex-row sm:justify-between sm:items-center sm:p-12",
      )}
    >
      <Image src={image} alt={"logo rumigrow"} width={250} />
      <div className={"flex flex-col gap-3"}>
        <h6 className={"font-bold"}>Contacto</h6>
        <h6>contacto@rumigrow.com</h6>
        <h6>(+51) 976 769 038</h6>
      </div>
    </SectionContainer>
  );
};
