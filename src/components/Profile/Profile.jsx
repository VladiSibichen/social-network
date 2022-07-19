import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.background} src={'https://lucknowrecreation.com/wp-content/uploads/2018/04/Monthly-Website-Header-background-e1522931579825.jpg'}/>
            </div>
            <div>
                ava + discription
                <img></img>
            </div>
            <MyPosts />
        </div>

    );
};

export default Profile;