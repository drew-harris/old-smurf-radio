import { titan } from "@/font";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className={`mb-4 text-center text-3xl font-bold ${titan.className}`}>
        Upcoming Events
      </h1>
      <div>
        October 31: Deadline for schedule changes
        <br />
      </div>
    </div>
  );
}
