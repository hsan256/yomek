import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  )
}
