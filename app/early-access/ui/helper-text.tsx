import { FC } from "react";

type HelperTextProps = {
  className?: string;
};

export const HelperText: FC<HelperTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={"px-4"}>
        <div className={"h-0.5 bg-primary"}></div>
      </div>

      <p className={"py-4 px-2 italic"}>
        Nos encantaría conocerte mejor. <br></br> Ayúdanos a entender tus
        preferencias y necesidades.
      </p>

      <div className={"px-4"}>
        <div className={"h-0.5 bg-primary"}></div>
      </div>
    </div>
  );
};
