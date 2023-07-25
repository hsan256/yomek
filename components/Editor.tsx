'use client'

import { deleteEntry, updateEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import Spinner from './Spinner'

// Custom hook for data handling
const useDataHandling = (entry) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const router = useRouter()

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await deleteEntry(entry.id)
      router.push('/journal')
    } catch (error) {
      console.error(error)
    }
  }

  useAutosave({
    data: value,
    onSave: async (_value) => {
      if (_value === entry.content) return
      setIsLoading(true)
      try {
        const { data } = await updateEntry(entry.id, _value)
        setAnalysis(data.analysis)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
  })

  return { value, setValue, isLoading, analysis, handleDelete }
}

const Editor = ({ entry }) => {
  const { value, setValue, isLoading, analysis, handleDelete } =
    useDataHandling(entry)

  const { mood, summary, color, subject, negative } = analysis

  const analysisData = [
    { name: 'Mood', value: mood },
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Negative', value: negative ? 'Yes' : 'No' },
  ]

  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 relative transition-all duration-500 ease-in-out">
      {isLoading && (
        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-white opacity-75 z-50">
          <div className="flex flex-col items-center justify-center">
            <Spinner />
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      )}
      <div className="col-span-2 p-4">
        <textarea
          className="w-full h-full p-8 text-xl bg-transparent border-0 outline-none resize-none transition-all duration-500 ease-in-out"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-gray-200 transition-all duration-500 ease-in-out">
        <div
          className="bg-blue-500 px-6 py-10 transition-all duration-500 ease-in-out"
          style={{ backgroundColor: color }}>
          <h2 className="text-2xl text-white">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                className="px-4 py-4 flex items-center justify-between border-b border-t border-gray-200 transition-all duration-500 ease-in-out hover:bg-gray-100"
                key={item.name}>
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
            <li className="py-4 px-8 flex items-center justify-between">
              <button
                onClick={handleDelete}
                type="button"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-all duration-500 ease-in-out">
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
