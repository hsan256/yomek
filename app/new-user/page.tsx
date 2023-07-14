/**
 * This page is used to create a new user in the database
 * It is called when a user logs in for the first time
 */
import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()

  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    })

    if (!match) {
      const newUser = await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      })
    }

    redirect('/journal')
  }
}

const NewUser = async () => {
  // We could create a spinner here
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
