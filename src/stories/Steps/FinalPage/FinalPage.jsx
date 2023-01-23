import React from 'react';
import './FinalPage.scss';
import Thankyou from '../../assets/icon-thank-you.svg';

const FinalPage = () => {

    return (
        <div className='FinalPage'>
            <div className='FinalPage-image'><img src={Thankyou} /></div>
            <div className='FinalPage-header'>Thank you!</div>
            <div className='FinalPage-text'>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </div>
        </div>
    );
};

export default FinalPage