import { NextResponse } from 'next/server';
import data from '@/data/perfume.json';

export async function GET() {
    return NextResponse.json(data);
}