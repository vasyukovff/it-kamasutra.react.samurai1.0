import React from 'react';
import UserItem from './UserItem';

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         { id: 1, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Dmitry', status: 'iam a boss', location: { city: 'Minsk', country: 'Belarus' } },
    //         { id: 2, photoUrl: 'https://place-hold.it/50', followed: true, fullName: 'Sasha', status: 'status ', location: { city: 'City Green', country: 'Gerany' } },
    //         { id: 3, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Misha 2', status: 'haha a am .net developer', location: { city: 'Los Angeles', country: 'UA' } },
    //         { id: 4, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Alexandr 3', status: 'software engeener', location: { city: 'Moscow', country: 'Russia' } }
    //     ])
    // }

    const addUser = () => {
        props.setUsers([
            { id: 1, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Dmitry', status: 'iam a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://place-hold.it/50', followed: true, fullName: 'Sasha', status: 'status ', location: { city: 'City Green', country: 'Gerany' } },
            { id: 3, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Misha 2', status: 'haha a am .net developer', location: { city: 'Los Angeles', country: 'UA' } },
            { id: 4, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Alexandr 3', status: 'software engeener', location: { city: 'Moscow', country: 'Russia' } }
        ])
    }

    return (
        <>
            <div>
                {
                    props.users.map(user => { return <UserItem {...user} onFollow={props.onFollow} onUnfollow={props.onUnfollow} key={user.id} /> })
                }
            </div>
            <button onClick={addUser}>AddUsers</button>
        </>
    )
}

export default Users;