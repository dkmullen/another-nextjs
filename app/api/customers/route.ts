import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listCustomers() {
  const data = await sql`
    SELECT *
    FROM customers
    LIMIT 15;
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listCustomers());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
