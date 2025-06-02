'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { signup } from '../actions/auth';
import { useActionState } from 'react'
 
export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  const router = useRouter();
    if(state?.success) {
        // Redirect to the login page after successful sign up
        router.push('/login');
    }
 
  return (
    <form action={action}>
      <div className='flex flex-col mb-2'>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" required className={`bg-white text-black ${state?.errors?.name ? 'border border-red-500' : ''}`} />
      </div>
      {state?.errors?.name && <p className='text-red-500 italic text-[12px]'>{state.errors.name}</p>}
 
      <div className='flex flex-col mb-2'>
        <label htmlFor="email">Email</label>
        <input id="email" type='email' name="email" placeholder="Email" required className={`bg-white text-black ${state?.errors?.email ? 'border border-red-500' : ''}`} />
      </div>
      {state?.errors?.email && <p className='text-red-500 italic text-[12px]'>{state.errors.email}</p>}
 
      <div className='flex flex-col mb-2'>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
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
      <button disabled={pending} type="submit" className='bg-black text-white px-4 py-2 rounded hover:bg-[#FFFFFF60]  border border-white disabled:opacity-50 capitalize cursor-pointer w-full
      '>
        {pending ? 'signing you up...' : 'Sign Up'}
      </button>
    </form>
  )
}