import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'
import Journal from '@/components/Journal'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })

  return entries
}

const JournalPage = async () => {
  const data = await getEntries()
  return (
    <>
      <Journal data={data} />
    </>
  )
}

export default JournalPage
