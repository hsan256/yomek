'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const HomePage = ({ href }) => {
  return (
    <motion.div
      className="w-screen h-screen bg-black flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-5xl font-bold mb-6 text-blue-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          Yomek
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}>
          Your personal AI-powered journaling companion.
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-white mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}>
          <li className="mb-2">AI mood tracking</li>
          <li className="mb-2">Summary creation</li>
          <li>Q&A with your own journal</li>
        </motion.ul>
        <Link href={href}>
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default HomePage
