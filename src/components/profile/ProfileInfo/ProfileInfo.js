import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://place-hold.it/900x100" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;