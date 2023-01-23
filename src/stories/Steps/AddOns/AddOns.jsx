import React from 'react';
import { PRICING, ADD_ONS } from '../../steps.config';
import Checkmark from '../../assets/checkmark.svg';
import './AddOns.scss';

const AddOns = ({ handleStateChange, stepsState }) => {
    const { paySchedule } = stepsState;
    const { scheduleAbbr } = PRICING["schedules"][paySchedule];

    const handleAddOnsClick = (option) => {
        handleStateChange(option, !stepsState[option]);
    }

    return (
        <div className='AddOns'>
            {
                ADD_ONS.map((addOn) => (
                    <div 
                        onClick={() => handleAddOnsClick(addOn.name)}
                        className={`AddOns-option ${stepsState[addOn.name] ? 'optionSelected' : ''}`}
                    >
                        <div className='AddOns-leftSide'>
                            {!stepsState[addOn.name] && 
                                <div className='AddOns-checkbox'/>
                            }
                            {stepsState[addOn.name] && 
                                <div className='AddOns-checkboxChecked'>
                                    <img src={Checkmark} />
                                </div>
                            }
                            <div className='AddOns-text'>
                                <div className='AddOns-label'>{addOn.label}</div>
                                <div className='AddOns-description'>{addOn.description}</div>
                            </div>
                        </div>
                        <div className='AddOns-amount'>+{PRICING[addOn.name][paySchedule]}/{scheduleAbbr}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default AddOns