import { Mail } from '@mui/icons-material'
import { Button } from '@mui/material'

const Contact = () => {
    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <div className='container'>
                        <a href='mailto:selinoser@gmail.com'>
                            <Button startIcon={<Mail />} variant="outlined" color="success" size="large">Let's get in touch</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact