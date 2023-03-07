import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Host Dashboard here</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard