import { BaseQueryPayload } from "./base";

export type GetTotalLaunchesPayload = Pick<BaseQueryPayload, "query">;

export interface GetQuickStatsResponse {
  totalLaunches: number;
  totalStarlinks: number;
  totalFailedLaunches: number;
  totalSuccessLaunches: number;
}

export interface HistoryLaunchItem {
  id: string;
  date_utc: string;
  success: boolean;
}

export interface LaunchChartData {
  label: string;
  total: number;
  failed: number;
  success: number;
}
