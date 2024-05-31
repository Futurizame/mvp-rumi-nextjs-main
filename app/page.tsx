import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./ui/comming-soon";

export default function Home() {
  const targetDate = new Date("2024-08-31").getTime();

  return (
    <main className="min-h-screen flex flex-col justify-around  items-center">
      <div className="w-full p-6 md:w-3/5 md:px-10 md:py-12">
        <Image
          src="/logo.png"
          width={250}
          height={150}
          className="hidden md:block"
          alt="logo desktop version"
        />
        <Image
          src="/movil.png"
          width={100}
          height={50}
          className="block md:hidden"
          alt="logo mobile version"
        />
      </div>
      <CountdownTimer targetDate={targetDate} />
      <div className="mt-8">
        <Link href="about">¿Quiénes somos?</Link>
        <span className="mx-2">|</span>
        <Link href="form">Regístrate</Link>
      </div>
    </main>
  );
}
