import ScheduleClient from "@/components/ScheduleClient/ScheduleClient";
import { fetchSchedule } from "@/utils/fetchSchedule";

export const metadata = {
  title: "Schedule",
  description:
    "Upcoming CMHL games and events. Check the schedule for the latest information on completed and upcoming matches.",
  alternates: { canonical: "/schedule" },
};

export default async function SchedulePage({ searchParams }) {
  const params = await searchParams;
  const year = params.year || "2026";

  const schedule = await fetchSchedule(year);

  if (!schedule) {
    return <div>ERROR: Failed to fetch schedule for {year}</div>;
  }
  return <ScheduleClient schedule={schedule} selectedYear={year} />;
}
