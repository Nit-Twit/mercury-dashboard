import { Big_Shoulders_Display } from "next/font/google";

const rubik = Big_Shoulders_Display({ subsets: ["latin"], weight: "700" });

type HeadingTextProps = {
  children: React.ReactNode;
};

export const HeadingText: React.FC<HeadingTextProps> = ({ children }) => {
  return <main className={rubik.className}>{children}</main>;
};
