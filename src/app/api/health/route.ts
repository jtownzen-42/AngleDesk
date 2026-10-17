import { NextResponse } from 'next/server';
export async function GET() { return NextResponse.json({ status: 'ok', service: 'angledesk', mode: 'demo', integrations: { xai: false, database: false } }); }
