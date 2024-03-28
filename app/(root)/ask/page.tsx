import MainScreen from '@/components/shared/MainScreen'
import PromptScreen from '@/components/shared/PromptScreen'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const AskPage = async () => {
  const {userId} = auth()
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId)
  return (
    <div className=' flex flex-1 flex-col justify-center items-center h-full w-screen gap-2'>
      <MainScreen/>
      <PromptScreen
      userId={user._id}
      creditBalance={user.creditBalance}      
      />
    </div>
  )
}

export default AskPage
