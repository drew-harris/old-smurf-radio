import { titan } from "@/font";

export default function Schedule() {
  return (
    <main className="mx-auto min-h-[100vh] max-w-4xl bg-zinc-800 px-8 py-8">
      <h1 className={`${titan.className} text-3xl`}>Schedule</h1>

      <h2 className={`${titan.className} text-2xl`}>Sunday</h2>
      <ScheduleSlot name="Lucie Gray Miller" time="3PM" />
      <ScheduleSlot name="Dmargolis" time="5PM" />
      <ScheduleSlot name="Josh Baier" time="7PM" />
      <ScheduleSlot name="Capri Woss" time="9PM" />
      <ScheduleSlot name="Armin Charkhkar" time="11PM" />
      <h2 className={`${titan.className} text-2xl`}>Monday</h2>
      <ScheduleSlot name="Tami Olujobi" time="4PM" />
      <ScheduleSlot name="Meg Castellanos" time="5PM" />
      <ScheduleSlot name="Niara Gill" time="6PM" />
      <ScheduleSlot name="Melanie Jackson" time="8PM" />
      <ScheduleSlot name="Olivia Avant" time="9PM" />
      <ScheduleSlot name="Drew Harris" time="10PM" />
      <ScheduleSlot name="Luke Carter" time="11PM" />
      <h2 className={`${titan.className} text-2xl`}>Tuesday</h2>
      <ScheduleSlot name="Miranda Makari" time="5PM" />
      <ScheduleSlot name="Zach Perez" time="6PM" />
      <ScheduleSlot name="Jane Strauss" time="7PM" />
      <ScheduleSlot name="Max Havens" time="8PM" />
      <ScheduleSlot name="Asher Ross" time="9PM" />
      <ScheduleSlot name="Jake Dixon" time="10PM" />
      <ScheduleSlot name="Jessiah Ruiz" time="11PM" />
      <h2 className={`${titan.className} text-2xl`}>Wednesday</h2>
      <ScheduleSlot name="Tyler Chapman" time="4PM" />
      <ScheduleSlot name="AnnaMarie Fernandes" time="5PM" />
      <ScheduleSlot name="Jordan Naivar" time="8PM" />
      <ScheduleSlot name="Joseph Mathews" time="9PM" />
      <ScheduleSlot name="Noah Barnard" time="10PM" />
      <ScheduleSlot name="Valerie Ledesma" time="11PM" />
      <ScheduleSlot name="Ian Webster" time="12AM" />
      <h2 className={`${titan.className} text-2xl`}>Thursday</h2>
      <ScheduleSlot name="Robin Kinagomba" time="3PM" />
      <ScheduleSlot name="Emmet Overcarsh" time="4PM" />
      <ScheduleSlot name="Mario Roman" time="6PM" />
      <ScheduleSlot name="Sydni with Bailey and Campbell" time="7PM" />
      <ScheduleSlot name="Sophie VanderMolen" time="8PM" />
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
