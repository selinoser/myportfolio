import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/scss/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/selinoser" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/selinoser/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio built by Selin Öser with 💜</p>
    </footer>
  )
}

export default Footer