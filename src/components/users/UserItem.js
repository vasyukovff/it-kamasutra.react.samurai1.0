const UserItem = (props) => {
    return (
        <div>
            <span>
                <div>
                    <img src={props.photos.small != null ? props.photos.small : 'https://place-hold.it/50'} />
                </div>
                <div>
                    {
                        props.followed
                            ? <button onClick={() => { props.onUnfollow(props.id) }}>Unfollow</button>
                            : <button onClick={() => { props.onFollow(props.id) }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>{"props.location.city"}</div>
                    <div>{"props.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default UserItem;