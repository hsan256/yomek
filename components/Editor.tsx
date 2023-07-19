'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis
  const analysisData = [
    { name: 'Mood', value: mood },
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Negative', value: negative ? 'Yes' : 'No' },
  ]
  
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const { data } = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3 gap-0 relative">
      <div className="absolute left-0 top-0 p-2">
        {isLoading && (
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-50">
            <div className="w-8 h-8 border-2 border-t-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <textarea
          className="w-full h-full p-8 text-xl bg-transparent border-0 outline-none resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/5">
        <div
          className="bg-blue-300 px-6 py-10"
          style={{ backgroundColor: color }}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                className="px-2 py-4 flex items-center justify-between border-b border-t border-black border-opacity-10"
                key={item.name}>
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
