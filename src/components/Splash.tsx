import { Titan_One } from "next/font/google";
import Embed from "./Embed";
import NextShow from "./client/NextShow";
const titan = Titan_One({ subsets: ["latin"], display: "swap", weight: "400" });
export default function Splash() {
  return (
    <div className="text-center">
      <div
        className={`grid w-full place-items-center text-[30px] font-bold md:text-[50px] ${titan.className}`}
      >
        S.M.U.R.F. Radio
      </div>
      <div className="mb-4">Live Sunday-Thursday 3pm-12am</div>
      <Embed />
    </div>
  );
}
