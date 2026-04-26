import { MenuProvider } from "@/contexts/MenuContext";
import { WindowWidthProvider } from "@/contexts/WindowWidthContext";

export default function Providers({ children }) {
  return (
    <WindowWidthProvider>
      <MenuProvider>{children}</MenuProvider>
    </WindowWidthProvider>
  );
}
