import classes from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    debugger;

    return (
        <div>
            <div>
                <img src="https://place-hold.it/900x100" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status='This my status!'/>
                <a href={`https://${props.profile.contacts.vk}`} target='_blank'> VK </a>
            </div>
        </div>
    );
}

export default ProfileInfo;