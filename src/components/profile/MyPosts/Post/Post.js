import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://place-hold.it/50' />
            Some body text in my post!
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;