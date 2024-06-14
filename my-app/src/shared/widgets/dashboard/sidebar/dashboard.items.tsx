import React from 'react'
import useRouteChange from '@/shared/hooks/useRouteChange'
import { useClerk } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
  const {activeRoute, setActiveRoute}=useRouteChange();
  const {signOut, user}=useClerk();
  const pathName=usePathname()
  return (
    <>
    {
      !bottomContent ? (
        <>
        </> 
        
      ):
      (
        <>
        <div className='p-2'>
            <div className='p-2'>

            </div>
      
       </div>
        </>
      )
    } 
    </>
    
  )
}

export default DashboardItems
