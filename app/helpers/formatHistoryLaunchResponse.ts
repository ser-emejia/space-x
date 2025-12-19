import { HistoryLaunchItem, LaunchChartData } from "../types/stats";

export function formatHistoryLaunchResponse(
  data: HistoryLaunchItem[]
): LaunchChartData[] {
  const map = new Map<string, LaunchChartData>();

  for (const item of data) {
    const year = new Date(item.date_utc).getFullYear().toString();

    if (!map.has(year)) {
      map.set(year, { label: year, total: 0, success: 0, failed: 0 });
    }

    map.get(year)!.total += 1;

    if (item.success) {
      map.get(year)!.success += 1;
    } else {
      map.get(year)!.failed += 1;
    }
  }

  const result = Array.from(map.values()).sort(
    (a, b) => Number(a.label) - Number(b.label)
  );

  return result;
}
