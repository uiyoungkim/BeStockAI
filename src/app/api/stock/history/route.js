import { NextResponse } from 'next/server';


// https://www.stockdata.org/documentation
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');
    const apiKey = process.env.STOCKDATA_API_KEY;

    const url = `https://api.stockdata.org/v1/data/eod?symbols=${symbol}&api_token=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //   console.log(data);  // Log the response data for debugging
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}
