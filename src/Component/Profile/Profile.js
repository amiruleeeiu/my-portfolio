import React from 'react';
import photo from '../../images/amirul.jpg'
import './Profile.css'
import Cards from './Cards/Cards';
import { useAuth } from '../Login/useAuth';



const Profile = () => {
    const auth=useAuth()
    console.log(auth.user);
    return (
        <div className="profile">
            <a href="https://www.linkedin.com/in/amirul-islam-9735b81a3/"><img src={photo} alt=""/></a>
            <p>Front end Developer</p>
            <h3>Hello,</h3>
            <p>I am a front end developer, my name is Amirul Islam</p>

            <p><small>You can communicate by</small></p>
            
                <div className="communication-media">
                    <a href="https://www.linkedin.com/in/amirul-islam-9735b81a3/"><i class="fa fa-linkedin-square" style={{fontSize:'32px'}}></i></a>
                    <a href="https://web.facebook.com/amirul1415.eee/"><i class="fa fa-facebook-square" style={{fontSize:'32px'}}></i></a>

                    <a href="https://github.com/amiruleeeiu/"><i class="fa fa-github-square" style={{fontSize:'32px'}}></i></a>
                    <a href="https://github.com/amiruleeeiu/"><i class="fa fa-instagram" style={{fontSize:'32px'}}></i></a>
                </div>

                <div className="mediaCard">
                    <div>
                        <Cards></Cards>
                    </div>
                    <div>
                        <Cards></Cards>
                    </div>
                    <div>
                        <Cards></Cards>
                    </div>
                </div>
           
                
            
            
        </div>
    );
};

export default Profile;