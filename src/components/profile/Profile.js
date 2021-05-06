import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setProfileStatusThunkCreator}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
