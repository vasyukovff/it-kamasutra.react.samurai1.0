import { NavLink } from 'react-router-dom';
import { follow, unfollow } from '../../api/api';

const UserItem = (props) => {
    return (
        <div>
            <span>
                <div>
                    <img src={props.photos.small != null ? props.photos.small : 'https://place-hold.it/50' /*UserDefaultPhoto*/} />
                </div>
                <div>
                    {
                        props.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                                props.onUnfollow(props.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                                props.onFollow(props.id);
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <NavLink to={'/profile/' + props.id}>
                        <div>{props.name}</div>
                    </NavLink>
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