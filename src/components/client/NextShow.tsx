"use client";

import { getDayName, getNextShow, getTimeName } from "@/app/time";
import { titan } from "@/font";

export default function NextShow() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone != "America/Chicago") return null;
  const show = getNextShow();
  const time = new Date();
  if (!show || !show.name) return null;
  return (
    <div>
      <h1 className={`mb-4 text-center text-3xl font-bold ${titan.className}`}>
        Next Up...
      </h1>
      <div className="text-center">
        <div className="text-lg font-bold">{show.name}</div>
        <div className="flex items-center justify-center gap-1">
          {time.getDay() != show.day && <span>{getDayName(show.day)}:</span>}
          <span>{getTimeName(show.time)}</span>
        </div>
      </div>
    </div>
  );
}
