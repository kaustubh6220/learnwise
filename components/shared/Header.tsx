import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className=' w-full border-b '>
      <div className='flex items-center gap-4 p-5 text-center flex-row justify-between'>
        <Link href='/' className=' w-36'>
          <Image src='/assets/images/logo.svg' width={128} height={38} alt='logo'/>        
        </Link>
        
        <SignedIn>
          <nav className=' md:flex md:justify-between md:items-center hidden w-full max-w-lg '>
            <NavItems/>
          </nav>
        </SignedIn>

        <div className=' flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className=' rounded-full text-orange-500 bg-white border-orange-500 border-2 hover:text-white hover:bg-orange-500' size='lg'>
              <Link href='/sign-in'>
                Login
              </Link>              
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
