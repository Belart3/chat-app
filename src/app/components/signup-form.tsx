'use client'
 
import { signup } from '../actions/auth';
import { useActionState } from 'react'
 
export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
 
  return (
    <form action={action}>
      <div className='flex flex-col mb-2'>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
      </div>
      {state?.errors?.name && <p className='text-red-500 italic text-[12px]'>{state.errors.name}</p>}
 
      <div className='flex flex-col mb-2'>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
      </div>
      {state?.errors?.email && <p className='text-red-500 italic text-[12px]'>{state.errors.email}</p>}
 
      <div className='flex flex-col mb-2'>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" className={`bg-white text-black ${state?.errors?.password ? 'border border-red-500' : ''}`} />
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
      <button disabled={pending} type="submit" className='bg-black text-white px-4 py-2 rounded hover:bg-[#FFFFFF60]  border border-white disabled:opacity-50'>
        Sign Up
      </button>
    </form>
  )
}