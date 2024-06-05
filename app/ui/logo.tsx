import { FC } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import image from "./logo.png";
import Link from "next/link";

type LogoProps = {
  redirect?: string;
};

// TODO: Change to toolbar
export const Logo: FC<LogoProps> = ({ redirect }) => {
  if (redirect !== undefined) {
    return (
      <SectionContainer containerClassName="p-4">
        <Link href={redirect} className={"block w-max"}>
          <Image src={image} alt="logo rumigrow" width={250} />
        </Link>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer containerClassName="p-4">
      <Image src={image} alt="logo rumigrow" width={250} />
    </SectionContainer>
  );
};
