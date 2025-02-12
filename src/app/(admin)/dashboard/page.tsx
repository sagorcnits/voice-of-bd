import { OverviewStats } from "./overview-states";

export default function Overview() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <OverviewStats />
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
