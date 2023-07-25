import { update } from "@/utils/actions";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
    const { content } = await request.json()
    const user = await getUserByClerkID()
    const updatedEntry = await prisma.journalEntry.update({
        where: {
            userId_id: {
                userId: user.id,
                id: params.id,
            },
        },
        data: {
            content,
        },
    })

    const analysis = await analyze(updatedEntry.content)

    const updated = await prisma.analysis.upsert({
        where: {
            entryId: updatedEntry.id,
        },
        create: {
            userId: user.id,
            entryId: updatedEntry.id,
            ...analysis,
        },
        update: analysis,
    })

    update(['/journal'])

    return NextResponse.json({ data: { ...updatedEntry, analysis: updated } })
}

// api delete
export const DELETE = async (request: Request, { params }) => {
    const user = await getUserByClerkID()
  
    // Retrieve the journal entry to be deleted
    const journalEntry = await prisma.journalEntry.findUnique({
      where: {
        userId_id: {
          id: params.id,
          userId: user.id,
        },
      },
      include: {
        analysis: true, // Include the associated analysis
      },
    })
  
    if (!journalEntry) {
      // Handle case when journal entry is not found
      return NextResponse.json({ error: 'Journal entry not found' }, { status: 404 })
    }
  
    // Delete the journal entry and its associated analysis
    await prisma.journalEntry.delete({
      where: {
        id: journalEntry.id,
      },
    })
  
    update(['/journal'])
  
    return NextResponse.json({ data: { id: params.id } })
  }
  