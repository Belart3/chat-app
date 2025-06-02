"use client"
import React from 'react';
import { login } from '../actions/auth';
import { useActionState } from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const LoginForm = (props: Props) => {
    const [state, action, pending] = useActionState(login, undefined)
    const router = useRouter();
    if(state?.success) {
        // Redirect to the home page after successful login
        router.push('/');
    }
  return (
    <form action={action} className='flex flex-col'>
        <div className='flex flex-col mb-2'>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" required placeholder="Email" className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
        </div>
        {state?.errors?.email && <p className='text-red-500 italic text-[12px]'>{state.errors.email}</p>}
    
        <div className='flex flex-col mb-2'>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" required type="password" className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
        </div>
        {state?.errors?.password && (
        <div>
          <p className='text-red-500 italic text-[12px]'>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li className='text-red-500 italic text-[12px]' key={error}>- {error}</li>
            ))}
          </ul>
        </div>
        )}
    
        <button type="submit" className='bg-black text-white px-4 py-2 rounded hover:bg-[#FFFFFF60] border border-white cursor-pointer w-full disabled:opacity-50 capitalize'
            disabled={pending}>
            {
                pending ? 'Logging you in...' : 'Log In'
            }
        </button>
    </form>
  )
}

export default LoginForm