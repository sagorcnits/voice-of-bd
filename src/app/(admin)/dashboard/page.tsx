import { NewsChart } from "./_components/news-chart";
import { OverviewStats } from "./_components/overview-states";

export default function Overview() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <OverviewStats />
      <NewsChart />
    </div>
  );
}
