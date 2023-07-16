'use client';

import { updateEntry } from '@/utils/api';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-50">
          <div className="w-8 h-8 border-2 border-t-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      )}

      <textarea
        className="w-full h-full p-8 text-xl bg-transparent border-0 outline-none resize-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
