import Section from "./Section";
import { getQuickStats } from "../api/stats";

const QuickStatsSection = async () => {
  const quickStats = await getQuickStats();

  return (
    <Section title="Quick Stats">
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        <StatCard label="Launches" value={quickStats.totalLaunches} />
        <StatCard
          label="Success Launches"
          value={quickStats.totalSuccessLaunches}
        />
        <StatCard
          label="Failed Launches"
          value={quickStats.totalFailedLaunches}
        />
        <StatCard label="Starlinks" value={quickStats.totalStarlinks} />
      </div>
    </Section>
  );
};

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-2 flex flex-col justify-between h-28 rounded-md border border-gray-100 shadow-sm">
      <p className="text-md font-bold">{label}</p>
      <div className="flex flex-col justify-end items-end">
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default QuickStatsSection;
