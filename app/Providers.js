import { MenuProvider } from "@/contexts/MenuContext";
import { ScheduleProvider } from "@/contexts/2025_ScheduleContext";
import { WindowWidthProvider } from "@/contexts/WindowWidthContext";

export default function Providers({ children }) {
  return (
    <WindowWidthProvider>
      <ScheduleProvider>
        <MenuProvider>{children}</MenuProvider>
      </ScheduleProvider>
    </WindowWidthProvider>
  );
}
