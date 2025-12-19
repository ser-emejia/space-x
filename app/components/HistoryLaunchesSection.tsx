import { getHistoryLaunches } from "../api/stats";

import Section from "./Section";
import LaunchesChart from "./LaunchesChart";

const HistoryLaunchesSection = async () => {
  const launches = await getHistoryLaunches();

  return (
    <Section title="History of Launches">
      <LaunchesChart data={launches} />
    </Section>
  );
};

export default HistoryLaunchesSection;
