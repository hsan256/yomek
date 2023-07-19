import { prisma } from '@/utils/db'
import { getUserFromClerkID } from '@/utils/auth'
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Link from 'next/link'
import { analyze } from '@/utils/ai'
import Question from '@/components/Question'

const getEntries = async () => {
  const user = await getUserFromClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const JournalPage = async () => {
  const data = await getEntries()
  return (
    <div className="px-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl mb-12">Journals</h1>
      <div className='my-8'>
        <Question />
      </div>
      <div className="my-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <NewEntryCard />
        {data.map((entry) => (
          <div
            key={entry.id}
            className="hover:scale-105 transition-transform duration-300">
            <Link href={`/journal/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
