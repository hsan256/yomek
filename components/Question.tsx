'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data } = await askQuestion(question)

    setAnswer(data)
    setLoading(false)
    setQuestion('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center">
        <label htmlFor="question" className="sr-only">
          Ask a question
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
          placeholder="Ask a question..."
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c3.042 0 5.824-1.135 7.938-3l-2.647-3A7.962 7.962 0 0112 16v4zm5.291-6A7.962 7.962 0 0112 20v4c4.418 0 8-3.582 8-8h-4zm-2.647-3A7.962 7.962 0 0116 12h4c0-4.418-3.582-8-8-8v4zm-3-2.647A7.962 7.962 0 0112 4V0c-4.418 0-8 3.582-8 8h4z"></path>
            </svg>
          ) : (
            'Ask'
          )}
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {answer && <p className="my-4 text-xl transition-opacity">{answer}</p>}
    </>
  )
}

export default Question
