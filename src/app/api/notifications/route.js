export async function GET() {
  try {
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwdmRlZWtzaGl0aGFyZWRkeUBnbWFpbC5jb20iLCJleHAiOjE3Nzg5MzI1OTgsImlhdCI6MTc3ODkzMTY5OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImYzMTA4OTQ5LTZkNWItNGIwYy04ZWVjLTQwZWRjMzNhZmEzMCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImRlZWtzaGl0aGEgcmVkZHkiLCJzdWIiOiI3NGJlMmM5Zi05ZGVlLTQwMzQtYWQ1Ny0wNDczMTY5MDYxNGUifSwiZW1haWwiOiJwdmRlZWtzaGl0aGFyZWRkeUBnbWFpbC5jb20iLCJuYW1lIjoiZGVla3NoaXRoYSByZWRkeSIsInJvbGxObyI6IjIybWlzMDM4OSIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6Ijc0YmUyYzlmLTlkZWUtNDAzNC1hZDU3LTA0NzMxNjkwNjE0ZSIsImNsaWVudFNlY3JldCI6IkJha25VZnBVckFnY3ZOblcifQ.AiCrju5FvWV0q6BVnQpTTZ6u4kR1toMp4-rwJruJ1eU";

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log("API DATA:", data);

    return Response.json({
      notifications: data.notifications || [],
    });

  } catch (error) {
    console.log("ERROR:", error);

    return Response.json(
      {
        notifications: [],
        error: error.message,
      },
      { status: 500 }
    );
  }
}