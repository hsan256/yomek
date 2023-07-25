'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { name: 'Journals', href: '/journal' },
  { name: 'History', href: '/history' },
]

const linkVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  hover: { scale: 1.1 },
}

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-100 border-gray-200 border-r flex flex-col items-center w-48">
        <div className="p-4 cursor-pointer" onClick={() => router.push('/')}>
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            YOMEK
          </h1>
        </div>
        <div>
          <ul className="px-4">
            {links.map((link) => (
              <motion.li
                key={link.name}
                className="text-xl my-4"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover">
                <Link href={link.href}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="h-16 border-b border-gray-200">
          <nav className="flex items-center justify-end h-full px-4">
            <span className="text-lg mr-4">Welcome, User</span>
            <UserButton afterSignOutUrl="/" />
          </nav>
        </header>
        <div className="flex-1 overflow-y-auto bg-gray-50">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
