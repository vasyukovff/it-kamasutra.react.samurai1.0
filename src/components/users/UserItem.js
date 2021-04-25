import UserDefaultPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, 
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
                                    }
                                }).then(response => {
                                    if(response.data.resultCode === 0){
                                        props.onUnfollow(props.id)
                                    }
                                })
                                props.onUnfollow(props.id)

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, 
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
                                    }
                                }).then(response => {
                                    if(response.data.resultCode === 0){
                                        props.onFollow(props.id)
                                    }
                                })
                                

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