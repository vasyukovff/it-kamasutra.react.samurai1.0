import React from 'react';
import styles from './Users.module.css';
import UserItem from './UserItem';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pageCount && i < 10; i++)
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
                    >{p}</span>
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