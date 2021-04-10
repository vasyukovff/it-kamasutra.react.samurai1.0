import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} textNewPost={props.state.textNewPost} 
            dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
