import React, { FC } from "react";

export const About: FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <div
            className="uppercase tracking-wide text-sm  font-semibold "
            style={{ color: "#16417C" }}
          >
            Quiénes somos
          </div>
          <p className="mt-2 text-gray-500">
            Somos un equipo apasionado por la tecnología y comprometido con
            ofrecer soluciones innovadoras a nuestros clientes. Nuestra misión
            es...
          </p>
        </div>
      </div>
    </div>
  );
};
