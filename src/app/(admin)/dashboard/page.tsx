import { NewsChart } from "./news-chart";
import { OverviewStats } from "./overview-states";

export default function Overview() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <OverviewStats />
      <NewsChart />
    </div>
  );
}
