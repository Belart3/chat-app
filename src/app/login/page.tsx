import React from 'react'
import LoginForm from '../components/login-form'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
        <h1 className='text-3xl font-bold text-white'>
            Login Page
        </h1>
        <LoginForm />
        <p className='text-white mt-4'>Don't have an account? <a href="/signup" className='text-blue-500 hover:underline'>Sign Up</a></p>
    </div>
  )
}

export default page