import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            id: String(params.id), // Convert to string
        }
    });
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
    const user = await prisma.user.findUnique({
        where: {
            id: String(params.id), // Convert to string
        }
    });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    try {
        const updateUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                name: body.name,
                email: body.email
            }
        });
        return NextResponse.json(updateUser);
    } catch (error) {
        // Handle specific database errors here
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            id: String(params.id), // Convert to string
        }
    });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    try {
        await prisma.user.delete({
            where: { id: user.id }
        });
        return NextResponse.json({});
    } catch (error) {
        // Handle specific database errors here
        return NextResponse.json({ error: "Error deleting user" }, { status: 500 });
    }
}
