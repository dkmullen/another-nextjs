import { GET } from '@/app/api/revenue/route';

type RevenueList = {
  month: string;
  revenue: number;
};

function sortByMonth(arr: RevenueList[]) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return arr.sort(function (a, b) {
    return months.indexOf(a.month) - months.indexOf(b.month);
  });
}

export default async function Page() {
  const res = await GET();
  const data: RevenueList[] = await res.json();
  const sorted: RevenueList[] = sortByMonth(data);

  return (
    <>
      <h1>Dashboard</h1>

      <div>
        {sorted.map((revenue, index) => (
          <div key={index}>
            {revenue.month} - {revenue.revenue}
          </div>
        ))}
      </div>
    </>
  );
}
