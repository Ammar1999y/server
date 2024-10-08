export async function GET() {
  return Response.json({ redirectByClient: "/home" }, {
    status: 307,
    headers: {
      "Access-Control-Allow-Origin": "https://localhost", 
      "Content-Type": "application/json; charset=utf-8"
    },
  }); 
}
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://localhost",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  });
}