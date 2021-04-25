import React from 'react';
import styles from './Users.module.css';
import UserItem from './UserItem';
import axios from 'axios';


// const onFollow = (userId) => {
//     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true}).then(response => {
//             debugger;
//             props.OnFollow(userId);
//         })
// }

let Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    let test = props.currentPage - 4;
    if(test < 1)
        test = 1;

    for(let i = test; i <= pageCount && i < props.currentPage + 4; i++)
    {
        pages.push(i);
    }

    return (
        <>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}
                    > {p} |</span>
                })}
            </div>
            <div>
                {
                    props.users.map(user => { return <UserItem {...user} onFollow={props.onFollow} onUnfollow={props.onUnfollow} key={user.id} /> })
                }
            </div>
        </>
    );
}

export default Users;