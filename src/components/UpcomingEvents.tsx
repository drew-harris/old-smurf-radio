import { titan } from "@/font";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className={`mb-4 text-center text-3xl font-bold ${titan.className}`}>
        Upcoming Events
      </h1>
      <div>
        Semester Sendoff/Full Body Meeting<br/>
        Friday December 1 at 4pm in Huges Trigg
        <br />
        <br />
        Optional Broadcasts Dec 5-Jan 15
      </div>
    </div>
  );
}
