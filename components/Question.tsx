'use client'

import { useState } from 'react'

const Question = (props) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    e.preventDefault()

    // do something here
    
  }

  return (
    <div>
      <form action="">
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question?"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-lg text-lg">
          Ask
        </button>
      </form>
    </div>
  )
}
export default Question
