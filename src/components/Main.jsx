import React from 'react';
import './../assets/scss/main.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Main = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQFXnCdMufnCYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1536351083366?e=1750291200&v=beta&t=GQSbf_NirtqmBlMaSafvy9B3YSlV5CPPCyRWrImUE9Q" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/selinoser" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/selinoser/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Selin Öser</h1>
          <p>Front End Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/selinoser" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/selinoser/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main