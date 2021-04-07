import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} textNewPost={props.textNewPost} 
            callbackAddPost={props.callbackAddPost} 
            callbackChangeTextNewPost={props.callbackChangeTextNewPost}/>
        </div>
    );
}

export default Profile;
