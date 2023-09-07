import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
