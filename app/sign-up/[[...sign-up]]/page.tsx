import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <SignUp path="/sign-up" routing="path" />
      </div>
    </div>
  )
}
