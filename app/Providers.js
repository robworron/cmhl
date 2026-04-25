import { MenuProvider } from "@/contexts/MenuContext";
import { ScheduleProvider } from "@/contexts/2025_ScheduleContext";
import { WindowWidthProvider } from "@/contexts/WindowWidthContext";

export default function Providers({ children, schedule }) {
  return (
    <WindowWidthProvider>
      <ScheduleProvider initialData={schedule}>
        <MenuProvider>{children}</MenuProvider>
      </ScheduleProvider>
    </WindowWidthProvider>
  );
}
