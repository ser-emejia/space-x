import { getQuickStats } from "@/app/lib/stats";

const QuickStats = async () => {
  const quickStats = await getQuickStats();

  console.log(quickStats);

  return (
    <div>
      <h2 className="text-2xl font-bold">Quick Stats</h2>
      <p className="text-sm text-gray-500">
        Total launches: {quickStats.totalLaunches}
      </p>
      <p className="text-sm text-gray-500">
        Total success launches: {quickStats.totalSuccessLaunches}
      </p>
      <p className="text-sm text-gray-500">
        Total failed launches: {quickStats.totalFailedLaunches}
      </p>
      <p className="text-sm text-gray-500">
        Total Starlinks: {quickStats.totalStarlinks}
      </p>
    </div>
  );
};

export default QuickStats;
