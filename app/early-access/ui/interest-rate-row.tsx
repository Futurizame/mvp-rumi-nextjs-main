import React, { FC } from "react";
import { clsx } from "clsx";

interface InterestRateRowProps {
  entity: string;
  rate: string;
  isHeader?: boolean;
}

export const InterestRateRow: FC<InterestRateRowProps> = ({
  entity,
  rate,
  isHeader = false,
}) => {
  return (
    <div className="flex gap-1">
      <div
        className={clsx(
          " h-12  p-2 border rounded-md border-2 border-primary flex justify-center items-center flex-1 text-center  font-semibold",
          isHeader ? "bg-blue-500 text-white border-none" : "bg-white",
        )}
      >
        {entity}
      </div>
      <div
        className={clsx(
          " h-12  p-2 border rounded-md border-2 border-primary flex justify-center items-center flex-1  font-semibold",
          isHeader ? "bg-blue-500 text-white border-none" : "bg-white",
        )}
      >
        {rate}
      </div>
    </div>
  );
};
