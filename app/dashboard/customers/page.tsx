import { GET } from '@/app/api/customers/route';

type Customer = {
  email: string;
  name: string;
};

export default async function Page() {
  const res = await GET();
  const data: Customer[] = await res.json();

  return (
    <>
      <h1>Customers Page</h1>

      <div>
        {data.map((customer, index) => (
          <div key={index}>
            {customer.name} - {customer.email}
          </div>
        ))}
      </div>
    </>
  );
}
