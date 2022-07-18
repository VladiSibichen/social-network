import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://lucknowrecreation.com/wp-content/uploads/2018/04/Monthly-Website-Header-background-e1522931579825.jpg'}/>
            </div>
            <div>
                ava + discription
                <img></img>
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;