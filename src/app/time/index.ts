import { schedule, Slot } from "@/schedule";

export const getNextShow = (): Slot | undefined => {
  const now = new Date();
  const nextHour = now.getHours() + 1;
  const day = now.getDay();
  const firstPick = schedule.find((slot) => {
    return slot.time >= nextHour && slot.day >= day;
  });

  if (firstPick) return firstPick;

  return schedule[0];
};

export const getDayName = (day: number) => {
  if (day == 0) {
    return "Sunday";
  } else if (day == 1) {
    return "Monday";
  } else if (day == 2) {
    return "Tuesday";
  } else if (day == 3) {
    return "Wednesday";
  } else if (day == 4) {
    return "Thursday";
  } else if (day == 5) {
    return "Friday";
  } else {
    return "Saturday";
  }
};

export const getTimeName = (hour: number) => {
  if (hour == 0) {
    return "12am";
  } else if (hour == 12) {
    return "12pm";
  } else if (hour > 12) {
    return `${hour - 12}pm`;
  } else {
    return `${hour}am`;
  }
};
