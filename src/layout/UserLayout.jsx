import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/user/Header'

const UserLayout = () => {
    const [sample, setSample] = useState(true)
  return (
    <>
    {
        sample ? <UserHeader/> : <Header/>
    }
      
      <Outlet />
    </>
  )
}

export default UserLayout
