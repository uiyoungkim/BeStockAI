export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, from data API!' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
