import { titan } from "@/font";

export default function Schedule() {
  return (
    <main className="mx-auto min-h-[100vh] max-w-4xl bg-zinc-800 px-8 py-8">
      <h1 className={`${titan.className} text-3xl`}>Schedule</h1>

      <h2 className={`${titan.className} text-2xl`}>Sunday</h2>
      <ScheduleSlot name="Dmargolis" time="5PM" />
      <ScheduleSlot name="Josh Baier" time="7PM" />
      <ScheduleSlot name="Miranda Makari" time="8PM" />
      <ScheduleSlot name="Capri Woss" time="9PM" />
      <h2 className={`${titan.className} text-2xl`}>Monday</h2>
      <ScheduleSlot name="Tolujobi" time="4PM" />
      <ScheduleSlot name="Meg Castellanos" time="5PM" />
      <ScheduleSlot name="Niara Gill" time="6PM" />
      <ScheduleSlot name="Olivia Avant" time="9PM" />
      <h2 className={`${titan.className} text-2xl`}>Tuesday</h2>
      <ScheduleSlot name="Zach Perez" time="6PM" />
      <ScheduleSlot name="Jane Strauss" time="7PM" />
      <ScheduleSlot name="Max Havens" time="8PM" />
      <ScheduleSlot name="Drew Harris" time="9PM" />
      <ScheduleSlot name="Jessiah Ruiz" time="11PM" />
      <h2 className={`${titan.className} text-2xl`}>Wednesday</h2>
      <ScheduleSlot name="Sydni" time="4PM" />
      <ScheduleSlot name="AnnaMarie Fernandes" time="5PM" />
      <ScheduleSlot name="Jordan Naivar" time="8PM" />
      <ScheduleSlot name="Joseph Mathews" time="9PM" />
      <ScheduleSlot name="Noah Barnard" time="10PM" />
      <h2 className={`${titan.className} text-2xl`}>Thursday</h2>
      <ScheduleSlot name="Robin Kinagomba" time="3PM" />
      <ScheduleSlot name="Emmet Overcarsh" time="4PM" />
      <ScheduleSlot name="Sophie VanderMolen" time="8PM" />
      <ScheduleSlot name="Armin Charkhar" time="11PM" />
    </main>
  );
}

const ScheduleSlot = ({ name, time }: { name: string; time: string }) => {
  return (
    <div className="flex gap-2 pl-2">
      <div className="w-[50px]">{time}</div>
      <div>{name}</div>
    </div>
  );
};
