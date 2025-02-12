import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1500 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2200 },
  { name: "May", total: 2500 },
  { name: "Jun", total: 2800 },
];

export async function OverviewStats({
  users,
  packages,
  Bookings,
  feedback,
}: any) {
  return (
    <section className="space-y-4">
      <h4 className="text-sm font-semibold">Overview</h4>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl font-bold">45</h1>
            <p className="text-xs text-muted-foreground">
              +20% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">All Pckages</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl font-bold">45</h1>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl font-bold">45</h1>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">FeedBacks</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl font-bold">45</h1>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
