const NewEntryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-sm font-medium text-gray-900">New Entry</div>
            <div className="text-sm text-gray-500">Create a new entry</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEntryCard
