import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetrialPage = ({ params: { id } }: Props) => {
    if (id > 10) notFound();
    return (
        <div>UserDetrialPage{id}</div>
    )
}

export default UserDetrialPage