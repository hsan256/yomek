import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache"
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

        const analysis = await analyze(entry.content)
        await prisma.analysis.create({
            data: {
                entryId: entry.id,
                ...analysis,
            },
        })

        revalidatePath('/journal')

        return NextResponse.json({ data: entry });
    } catch (error) {
        console.error('There has been a problem creating the journal entry: ', error)
        throw error
    }
}
