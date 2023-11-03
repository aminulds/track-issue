import authOptions from "@/app/auth/authOptions";
import { IssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// UPDATE
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({}, { status: 401 });

    const body = await request.json();
    const validation = IssueSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 });

    const issue = prisma.issue.findUnique({
        where: { id: params.id }
    })

    if (!issue)
        return NextResponse.json({ error: 'Invalid issue!' }, { status: 404 });
    const issueUpdate = await prisma.issue.update({
        where: { id: params.id },
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(issueUpdate);
}

// DELETE
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({}, { status: 401 });


    const issue = prisma.issue.findUnique({
        where: { id: params.id }
    })

    if (!issue)
        return NextResponse.json({ error: 'Invalid issue!' }, { status: 404 });

    const issueUpdate = await prisma.issue.delete({
        where: { id: params.id }
    })

    return NextResponse.json({});

}