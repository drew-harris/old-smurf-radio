import Splash from "@/components/Splash";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="mx-16 min-h-[100vh] bg-zinc-800 px-8">
      <Splash />
      <hr className="my-4 mt-8 border-gray-500" />
      <UpcomingEvents />
    </main>
  );
}
