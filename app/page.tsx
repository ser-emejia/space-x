import Header from "@/app/components/Header";

import QuickStatsSection from "./components/QuickStatsSection";
import HistoryLaunchesSection from "./components/HistoryLaunchesSection";

export default function Home() {
  return (
    <div className="w-full h-screen p-2 md:p-4">
      <main className="w-full h-full md:flex md:gap-4 md:justify-between">
        <div className="hidden md:block md:min-w-[300px] border border-orange-500">
          <h1 className="text-2xl font-bold">SpaceX</h1>
        </div>
        <div className="flex flex-col gap-4 h-full w-full border border-purple-500">
          <Header />
          <div className="flex flex-col gap-4 overflow-y-auto">
            <QuickStatsSection />
            <HistoryLaunchesSection />
          </div>
        </div>
      </main>
    </div>
  );
}
