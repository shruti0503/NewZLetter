import React from 'react'
import { useUser } from '@clerk/nextjs'
import DashboardItems from './dashboard.items';
import UserPlan from './user.plan';


const DashboardSidebar = () => {
  const {user}=useUser();
  return (
    <div className='p-2 bg-white'>
      <div className='p-2 flex items-center bg-[#f5f5f5f5] rounded'>
        <span className='text-2xl text-black'></span>
        <h5 className='pl-2 pt-1 capitalize'>{user?.username}</h5>

      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems 
        // bottomContent={true} 
        />

      </div>

   
    </div>
  )
}

export default DashboardSidebar
