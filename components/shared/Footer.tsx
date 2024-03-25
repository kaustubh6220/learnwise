import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' border-t'>
      <div className='flex items-center justify-center flex-col gap-4 p-5 text-center sm:flex-row sm:justify-between'>
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38}>
            
          </Image>
        </Link>
        <p>2023 LearnWise. All Rights reserved.</p>
      </div>      
    </footer>
  )
}

export default Footer
