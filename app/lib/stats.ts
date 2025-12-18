import { BASE_URL } from "@/app/constants";

import {
  GetQuickStatsResponse,
  GetTotalLaunchesPayload,
} from "@/app/types/stats";

async function getTotalLaunches(
  payload: GetTotalLaunchesPayload
): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL}/launches/query`, {
      method: "POST",
      next: { revalidate: 3_600 },
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, options: { limit: 0 } }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch total launches: ${response.statusText}`);
    }

    const data = await response.json();

    return data.totalDocs;
  } catch (error) {
    console.error("Failed to fetch total launches", error);
    return 0;
  }
}

async function getTotalStarlinks(): Promise<number> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SPACEX_API}/starlink/query`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: {},
          options: { limit: 0 },
        }),
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) throw new Error("Error en Starlink count");

    const data = await response.json();
    return data.totalDocs;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function getQuickStats(): Promise<GetQuickStatsResponse> {
  try {
    const [
      totalLaunches,
      totalSuccessLaunches,
      totalFailedLaunches,
      totalStarlinks,
    ] = await Promise.all([
      getTotalLaunches({ query: {} }),
      getTotalLaunches({ query: { success: true } }),
      getTotalLaunches({ query: { success: false } }),
      getTotalStarlinks(),
    ]);

    return {
      totalLaunches,
      totalSuccessLaunches,
      totalFailedLaunches,
      totalStarlinks,
    };
  } catch (error) {
    console.error("Failed to fetch quick stats", error);
    return {
      totalLaunches: 0,
      totalSuccessLaunches: 0,
      totalFailedLaunches: 0,
      totalStarlinks: 0,
    };
  }
}
