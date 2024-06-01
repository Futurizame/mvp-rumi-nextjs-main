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
    <main className="flex justify-center items-center px-2 ">
      <div className={clsx("max-w-5xl w-full h-screen ", className)}>
        {children}
      </div>
    </main>
  );
};
