import React from 'react';
import { PRICING } from '../../steps.config';
import './AddOns.scss';

const AddOns = ({ handleStateChange, stepsState }) => {
    const { paySchedule, serviceAddOn, storageAddOn, profileAddOn } = stepsState;
    const { scheduleAbbr } = PRICING["schedules"][paySchedule];

    const handleAddOnsClick = (option) => {
        handleStateChange(option, !stepsState[option]);
    }

    return (
        <div className='AddOns'>
            <div 
                onClick={() => handleAddOnsClick('serviceAddOn')}
                className='AddOns-option'
            >
                <div className='AddOns-leftSide'>
                    <div className='AddOns-checkbox'>
                        <input onChange={() => null} checked={serviceAddOn} type='checkbox' />
                    </div>
                    <div className='AddOns-text'>
                        <div className='AddOns-label'>Online service</div>
                        <div className='AddOns-description'>Access to multiplayer games</div>
                    </div>
                </div>
                <div className='AddOns-amount'>+{PRICING["serviceAddOn"][paySchedule]}/{scheduleAbbr}</div>
            </div>
            <div 
                onClick={() => handleAddOnsClick('storageAddOn')}
                className='AddOns-option'
            >
                <div className='AddOns-leftSide'>
                    <div className='AddOns-checkbox'>
                        <input onChange={() => null} checked={storageAddOn} type='checkbox' />
                    </div>
                    <div className='AddOns-text'>
                        <div className='AddOns-label'>Larger storage</div>
                        <div className='AddOns-description'>Extra 1TB of cloud save</div>
                    </div>
                </div>
                <div className='AddOns-amount'>+{PRICING["storageAddOn"][paySchedule]}/{scheduleAbbr}</div>
            </div>
            <div 
                onClick={() => handleAddOnsClick('profileAddOn')}
                className='AddOns-option'
            >
                <div className='AddOns-leftSide'>
                    <div className='AddOns-checkbox'>
                        <input onChange={() => null} checked={profileAddOn} type='checkbox' />
                    </div>
                    <div className='AddOns-text'>
                        <div className='AddOns-label'>Customizable profile</div>
                        <div className='AddOns-description'>Custom theme on your profile</div>
                    </div>
                </div>
                <div className='AddOns-amount'>+{PRICING["profileAddOn"][paySchedule]}/{scheduleAbbr}</div>
            </div>
        </div>
    );
};

export default AddOns