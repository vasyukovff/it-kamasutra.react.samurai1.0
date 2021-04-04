import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://place-hold.it/50' />
            {props.message}
            <div>
                {props.likesCount}<span> like</span>
            </div>
        </div>
    );
}

export default Post;