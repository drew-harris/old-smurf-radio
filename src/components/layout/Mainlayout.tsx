import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="debug w-full">
      <Navbar />
      <main className="mx-auto min-h-[100vh] max-w-4xl bg-zinc-800 px-8 pt-14">
        {children}
      </main>
    </div>
  );
}
