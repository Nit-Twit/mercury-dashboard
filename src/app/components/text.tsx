import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: "400" });

type HeadingTextProps = {
  children: React.ReactNode;
};

export const HeadingText: React.FC<HeadingTextProps> = ({ children }) => {
  return <main className={rubik.className}>{children}</main>;
};
