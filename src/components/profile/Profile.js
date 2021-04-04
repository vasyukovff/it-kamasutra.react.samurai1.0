import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://place-hold.it/900x100" />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;