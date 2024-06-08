import React, { FC } from "react";
import { InterestRateRow } from "./interest-rate-row";

export const InterestRates: FC = () => {
  const interestRates = [
    { entity: "Entidades", rate: "Tasas" },
    { entity: "Rumigrow", rate: "5.46%" },
    { entity: "BBVA*", rate: "0.75%" },
    { entity: "BCP*", rate: "0.25%" },
    { entity: "Otras financieras*", rate: "5.00%" },
  ];

  return (
    <div className="max-w-2xl w-full px-8 pt-4">
      <h2 className="font-medium text-lg pl-4">
        Tasas de interés anual ofrecido:
      </h2>
      <div className="flex flex-col gap-2">
        {interestRates.map((item, index) => (
          <InterestRateRow
            key={index}
            entity={item.entity}
            rate={item.rate}
            isHeader={index === 0}
          />
        ))}
      </div>
      <h2 className="text-sm mt-2">*Información pública de la SBS</h2>
    </div>
  );
};
