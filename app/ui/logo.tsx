import { FC } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";

export const Logo: FC = () => {
  return (
    <SectionContainer containerClassName="p-4">
      <Image src="/logo.png" width={250} height={150} alt="logo rumigrow" />
    </SectionContainer>
  );
};
