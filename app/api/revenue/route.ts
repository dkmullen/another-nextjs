import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listRevenue() {
  const data = await sql`
    SELECT *
    FROM revenue
  `;
  return data;
}

export async function GET() {
  try {
    return Response.json(await listRevenue());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
