// app/api/careers/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Your API logic here
    const careers = []; // Your data
    return NextResponse.json({ success: true, data: careers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    // Your POST logic here
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}