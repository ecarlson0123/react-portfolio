import React from 'react';


function Footer () {

return (
    <div className='footer'>
        <a href='mailto:ecarlson0123@yahoo.com' target='_blank' rel="noreferrer">
            <img className='footerLogo' src={require('../../assets/personal/mail.png')} alt=''/>
        </a>
        <a href='https://github.com/ecarlson0123' target='_blank' rel="noreferrer">
            <img className='footerLogo' src={require('../../assets/personal/GitHub-Mark-Light-32px.png')} alt=''/>
        </a>
        <a href='https://linkedin/in/erichcarlson' target='_blank' rel="noreferrer">
            <img className='footerLogo' src={require('../../assets/personal/linkedin-white.png')} alt=''/>
        </a>
    </div>
)

}

export default Footer