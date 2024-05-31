import React, { FC } from "react";

export const Presentation: FC = () => {
  return (
    <div className="max-w-sm sm:max-w-md mx-auto">
      <iframe
        className="w-full aspect-video "
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
