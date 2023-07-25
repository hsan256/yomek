'use client'

import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Link from 'next/link'
import Question from '@/components/Question'
import { motion } from 'framer-motion'

const Journal = ({ data }) => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center px-6 py-8 bg-gray-100 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <motion.h1
          className="text-4xl mb-12 text-center text-blue-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Journals
        </motion.h1>
        {data !== null ? (
          <motion.div
            className="my-8 w-full max-w-2xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}>
            <Question />
          </motion.div>
        ) : null}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 w-full max-w-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}>
          <NewEntryCard />
          {data.map((entry) => (
            <motion.div
              key={entry.id}
              className="hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <Link href={`/journal/${entry.id}`}>
                <EntryCard entry={entry} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Journal
