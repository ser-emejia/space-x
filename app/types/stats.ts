import { BaseQueryPayload } from "./base";

export type GetTotalLaunchesPayload = Pick<BaseQueryPayload, "query">;

export interface GetQuickStatsResponse {
  totalLaunches: number;
  totalStarlinks: number;
  totalFailedLaunches: number;
  totalSuccessLaunches: number;
}
