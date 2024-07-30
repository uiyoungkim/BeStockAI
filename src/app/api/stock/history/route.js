import { NextResponse } from 'next/server';

const API_URL = 'https://api.stockdata.org/v1/data/eod';
const API_KEY = process.env.STOCKDATA_API_KEY;

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function getDateNDaysAgo(n) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    return formatDate(date);
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');
    const dateFrom = getDateNDaysAgo(180);
    const dateTo = formatDate(new Date());

    const url = `${API_URL}?symbols=${symbol}&date_from=${dateFrom}&date_to=${dateTo}&api_token=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}
