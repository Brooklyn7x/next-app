import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}
interface Props {
    sortOrder: string
}
const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
    const users: User[] = await res.json();

    const sorterUser = sort(users).asc(sortOrder === "email" ? user => user.email : user => user.name)
    
    return (
        <table className='table table-bordered border-red-100'>
            <thead>
                <tr>
                    <th><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sorterUser.map(user => <tr><td>{user.name}</td><td></td>{user.email}</tr>)}
            </tbody>
        </table>
    )
}

export default UserTable