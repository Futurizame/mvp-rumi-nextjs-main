import React, { FC } from "react";

export const Presentation: FC = () => {
  return (
    <div className="flex justify-center w-96">
      <iframe
        src="https://www.youtube.com/embed/cizFKf09-qA"
        title="Qué es RumiGrow"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-hidden="true"
      ></iframe>
    </div>
  );
};
