import { Nanum_Gothic } from "next/font/google";

const rubik = Nanum_Gothic({ subsets: ["latin"], weight: "400" });

type HeadingTextProps = {
  children: React.ReactNode;
};

export const HeadingText: React.FC<HeadingTextProps> = ({ children }) => {
  return <main className={rubik.className}>{children}</main>;
};
