import React from 'react'
import SignupForm  from '../components/signup-form'

const page = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
      <SignupForm />
    </div>
  )
}

export default page