import SmallAboutUs from "@/components/SmallAboutUs";
import Splash from "@/components/Splash";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="mx-auto min-h-[100vh] max-w-4xl bg-zinc-800 px-8">
      <Splash />
      <hr className="my-4 mt-8 border-gray-500" />
      <UpcomingEvents />
      <hr className="my-4 mt-8 border-gray-500" />
      <SmallAboutUs />
    </main>
  );
}
