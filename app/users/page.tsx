import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: { sortOrder: string }
}

const page = async ({ searchParams: { sortOrder } }: Props) => {

  return (
    <>
      <div className='p-5'>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <UserTable sortOrder={sortOrder} />
      </div>
    </>
  )
}

export default page