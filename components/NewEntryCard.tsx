'use client'

import { createNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
  const router = useRouter()

  const handleOnClick = async () => {
    const { data } = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }

  return (
    <div className="relative py-3" onClick={handleOnClick}>
      <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-6 cursor-pointer overflow-hidden hover:bg-blue-100 transition-colors duration-300">
        <div className="px-4 py-5 sm:p-6">
          <span className="text-3xl text-blue-600">New Entry</span>
        </div>
      </div>
    </div>
  )
}

export default NewEntryCard
