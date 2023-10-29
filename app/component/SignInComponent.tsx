"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

type Props = {}

const SignInComponent = (props: Props) => {
// session 
const {data: session, status} = useSession()
if (session && session.user) {
    return(
        <div className='flex flex-col place-items-center gap-2'>
            <p className="text-center">{session.user.name}</p>
            <Image src={session.user.image??""} width="50" height="50" alt=''
                    className='w-10 h-10 rounded-full p-1 ring-2 ring-slate-500'/>            <button onClick={()=> signOut()} className="text-red-600 border border-red-600 p-4">Sign Out</button>
        </div>
    );
    
}
  return (
    <div className='flex flex-col place-items-center'>
        <button onClick={()=> signIn(
          // "google" ,{callbackUrl: 'http://localhost:3000'}
          )} className="text-green-600 border border-green-600 p-4">Sign In</button>
    </div>
  )
}

export default SignInComponent

