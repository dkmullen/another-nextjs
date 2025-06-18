import { GET } from '@/app/api/query/route';

type Person = {
  amount: number;
  name: string;
};

export default async function Page() {
  const res = await GET();
  const data: Person[] = await res.json();

  return (
    <>
      <h1>Invoices Page</h1>

      <div>
        {data.map((person, index) => (
          <div key={index}>
            {person.name} - {person.amount}
          </div>
        ))}
      </div>
    </>
  );
}
