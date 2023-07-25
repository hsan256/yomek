const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  console.log(entry)
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{date}</h3>

          <div className="flex">
            <button
              className="px-2 py-1 mr-2 rounded-lg"
              style={{ backgroundColor: entry.analysis.color }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
            </button>

            <button className="px-2 py-1 text-red-500 bg-red-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p className="font-bold">Summary:</p>
              <p>{entry.analysis.summary}</p>
            </div>

            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p className="mb-4">Add a new entry:</p>
              <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Open Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryCard
