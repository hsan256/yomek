import { auth } from '@clerk/nextjs'
import HomePage from '@/components/HomePage'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <>
      <HomePage href={href} />
    </>
  )
}
