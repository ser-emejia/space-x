"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { LaunchChartData } from "../types/stats";

interface Props {
  data: LaunchChartData[];
}

const LaunchesChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350} className="overflow-hidden">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="#e5e7eb"
        />
        <XAxis dataKey="label" />
        <Tooltip />
        <Legend
          verticalAlign="top"
          height={36}
          iconType="plainline"
          layout="radial"
          formatter={(value: string) => {
            return (
              <span className="text-sm font-bold">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            );
          }}
        />
        <Area
          type="linear"
          dataKey="total"
          stroke="#3b82f6"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorTotal)"
          isAnimationActive={true}
        />
        <Area
          type="linear"
          dataKey="success"
          stroke="#10b981"
          strokeWidth={2}
          fillOpacity={1}
          isAnimationActive={true}
          fill="url(#colorSuccess)"
        />

        <Area
          type="linear"
          dataKey="failed"
          stroke="#ef4444"
          strokeWidth={2}
          fill="url(#colorFailed)"
          fillOpacity={1}
          isAnimationActive={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LaunchesChart;
