import { titan } from "@/font";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className={`mb-4 text-center text-3xl font-bold ${titan.className}`}>
        Upcoming Events
      </h1>
      <div>
        October 5: 7:30-8:30pm Body Meeting
        <br />
        October 11: First Broadcast
        <br />
        October 31: Deadline for schedule changes
        <br />
      </div>
    </div>
  );
}
