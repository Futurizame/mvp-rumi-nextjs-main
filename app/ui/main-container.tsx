import { FC, PropsWithChildren } from "react";
import { clsx } from "clsx";

type MainContainerProps = PropsWithChildren & {
  className?: string;
};

export const MainContainer: FC<MainContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className="flex flex-col items-center">
      <div className={clsx("max-w-5xl w-full", className)}>{children}</div>
    </main>
  );
};
