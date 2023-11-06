import SmallAboutUs from "@/components/SmallAboutUs";
import Splash from "@/components/Splash";
import UpcomingEvents from "@/components/UpcomingEvents";
import NextShow from "@/components/client/NextShow";

export default function Home() {
  return (
    <>
      <Splash />
      <hr className="my-4 mt-8 border-gray-500" />
      <NextShow />
      <hr className="my-4 mt-8 border-gray-500" />
      <UpcomingEvents />
      <hr className="my-4 mt-4 border-gray-500" />
      <SmallAboutUs />
    </>
  );
}
