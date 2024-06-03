import { FC, PropsWithChildren } from "react";
import { clsx } from "clsx";

type MainContainerProps = PropsWithChildren & {
  containerClassName?: string;
  className?: string;
};

export const SectionContainer: FC<MainContainerProps> = ({
  children,
  containerClassName,
  className,
}) => {
  return (
    <section className={clsx("flex flex-col items-center", containerClassName)}>
      <div className={clsx("max-w-5xl w-full", className)}>{children}</div>
    </section>
  );
};
