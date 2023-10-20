import React, { ReactNode } from 'react'

interface Props{
    children : ReactNode
}

const AdminLayout = ( {children} : Props) => {
  return (
    <div>AdminLayout</div>
  )
}

export default AdminLayout