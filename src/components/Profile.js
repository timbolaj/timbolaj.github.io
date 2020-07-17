import React from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from './Profile-components/Summary';

export default function Profile() {
  return (
    <div className="summary d-flex justify-content-center vertical-center">
      <div className="profile-picture">
        <img src={picture} alt="picture"></img>
      </div>

      <br></br>

      <div class="jumbotron">
        <Summary />
      </div>
    </div>
  )
}