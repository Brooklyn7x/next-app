'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Loading from './loading';

const NavBar = () => {
    const { status, data: session } = useSession();
    if (status === 'loading') return <Loading />

    return (
        <div className='flex bg-slate-200 p-5 x-5'>
            <Link href="/" className='mr-5'>Next.js</Link>
            <Link href="/users" >Users</Link>
            {status === 'authenticated' && <div className='pl-5' >{session.user!.name}
                <Link href="/api/auth/signout" className='pl-5'>SignOut</Link></div>}
            {status === 'unauthenticated' && <Link className='pl-5' href="/api/auth/signin">Login</Link>}
        </div>
    )
}

export default NavBar;