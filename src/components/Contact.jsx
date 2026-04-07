import React from "react";
import './../assets/scss/contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Contact = () => {
    const socialLinks = [
        { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/selinoser' },
        { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/selinoser/' },
        { icon: <EmailIcon />, label: 'Email', href: 'mailto:selinoser@gmail.com' }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="title">Get In Touch</h2>
                    <div className="underline"></div>
                    <p className="subtitle">Feel free to reach out if you'd like to collaborate or just say hi!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-message">
                        <a href="mailto:selinoser@gmail.com" className="contact-button">
                            <span>Let's Talk</span>
                            <SendIcon />
                        </a>
                    </div>


                    <div className="social-links">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="social-link"
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact