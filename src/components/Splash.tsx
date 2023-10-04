import { Titan_One } from "next/font/google";
import Embed from "./Embed";
const titan = Titan_One({ subsets: ["latin"], display: "swap", weight: "400" });
export default function Splash() {
  return (
    <div className="text-center">
      <div
        className={`grid w-full place-items-center text-[50px] font-bold ${titan.className}`}
      >
        S.M.U.R.F. Radio
      </div>
      <Embed />
      <div className="text-2xl">Live Weekdays</div>
      <div className="text-2xl">4pm - 12am</div>
    </div>
  );
}
