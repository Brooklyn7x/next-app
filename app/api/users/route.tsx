import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        // Handle any errors that might occur during the database query
        return NextResponse.json({ error: "Error fetching data from the database" }, { status: 500 });
    }
}
export async function POST(request: NextRequest) {
    const body = await request.json()
    if (!body.name) return NextResponse.json({ error: 'Name is Required' }, { status: 400 })
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}


// export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {

//     const body = await request.json();
//     if (!body.name) return NextResponse.json({ error: "Name is Required" }, { status: 400 })
//     if (params.id > 10) return NextResponse.json({ error: "User Not found" }, { status: 404 })
//     return NextResponse.json({ id: 11, name: body.name })


// }

