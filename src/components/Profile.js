import React, { useState } from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from './Profile-components/Summary';
import Skills from './Profile-components/Skills';
import Button from '@material-ui/core/Button';

const SUMMARY = 'Summary';
const SKILLS = 'Skills';

export default function Profile() {

  const [mode, setMode] = useState(SUMMARY);

  return (
    <div className="profile d-flex justify-content-center vertical-center">

      <div className="profile-picture">
        <img src={picture} alt="picture"></img>
      </div>

      <br></br>

      <div className="jumbotron">

        <div className="profile-components">
          {mode === SUMMARY && <Summary />}
          {mode === SKILLS && <Skills /> }
        </div>
   
        <div className="modes">
          <Button
            variant="contained"
            color="secondary"
            className="summary"
            onClick={() => setMode(SUMMARY)}
          >
            Summary
          </Button>

          &nbsp;

          <Button
            variant="contained"
            color="secondary"
            className="skills"
            onClick={() => setMode(SKILLS)}
          >
            Skills
          </Button>

        </div>

      </div>
    </div>
  )
}