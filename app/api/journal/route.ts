import { update } from "@/utils/actions";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server"

export const POST = async () => {
    try {
        const user = await getUserByClerkID()
        const entry = await prisma.journalEntry.create({
            data: {
                userId: user.id,
                content: 'Welcome to your journal! Write something here! :)',
            },
        })

        await prisma.analysis.create({
            data: {
                mood: 'Neutral',
                subject: 'None',
                negative: false,
                summary: 'None',
                sentimentScore: 0,
                color: '#0101fe',
                userId: user.id,
                entryId: entry.id,
            },
        })

        update(['/journal'])

        return NextResponse.json({ data: entry });
    } catch (error) {
        console.error('There has been a problem creating the journal entry: ', error)
        throw error
    }
}
