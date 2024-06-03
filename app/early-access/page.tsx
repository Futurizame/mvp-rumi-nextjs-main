import { Logo } from "../ui/logo";
import Form from "./ui/form";

export default function EarlyAccess() {
  return (
    <main className="h-full flex justify-center items-center  bg-background  ">
      <div className=" max-w-md  p-2 md:py-4">
        <Logo />
        <div className="flex flex-col gap-4 py-4 ">
          <h1 className="text-2xl font-bold text-900">
            REGISTRO DE INVERSORES
          </h1>
          <p className="text-primary font-semibold">
            Rumigrow es una plataforma en desarrollo, peor ya está trabajando en
            sus primeras inversiones inmobiliarias compartidas, si te interesa
            probar las primeras versiones de la plataforma registra tus datos y
            te contactaremos pronto.
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}
