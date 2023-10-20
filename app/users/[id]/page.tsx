import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetrialPage = ({ params: { id } }: Props) => {
    return (
        <div>UserDetrialPage{id}</div>
    )
}

export default UserDetrialPage