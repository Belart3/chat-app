import React from 'react'
import SignupForm  from '../components/signup-form'

const page = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
      <SignupForm />
      <p className='text-white mt-4'>Don't have an account? <a href="/login" className='text-blue-500 hover:underline'>Login</a></p>
    </div>
  )
}

export default page