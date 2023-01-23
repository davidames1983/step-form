import React from 'react';
import Arcade from '../../assets/icon-arcade.svg';
import Advanced from '../../assets/icon-advanced.svg';
import Pro from '../../assets/icon-pro.svg';
import { PRICING } from '../../steps.config';
import './SelectPlan.scss';

const SelectPlan = ({ handleStateChange, stepsState }) => {
    const { paySchedule, selectedPlan } = stepsState;

    const isYrly = paySchedule === 'yearly';

    const handleSwitchClick = () => {
        const newVal = paySchedule === 'yearly' ? 'monthly' : 'yearly';
        handleStateChange('paySchedule', newVal);
    }

    const { scheduleAbbr } = PRICING["schedules"][paySchedule];
    const arcadePrice = PRICING['arcade'][paySchedule];
    const advancedPrice = PRICING['advanced'][paySchedule];
    const proPrice = PRICING['pro'][paySchedule];

    return (
        <div className='SelectPlan'>
            <div className='SelectPlan-options'>
                <div 
                    onClick={() => handleStateChange('selectedPlan','arcade')}
                    className={`SelectPlan-option ${selectedPlan === 'arcade' ? 'selectedPlan' : null}`}
                >
                    <div>
                        <img src={Arcade} />
                    </div>
                    <div>Arcade</div>
                    <div>
                        <div>${arcadePrice}/{scheduleAbbr}</div>
                        {isYrly && <div>2 monthss free</div>}             
                    </div>  
                </div>
                <div 
                    onClick={() => handleStateChange('selectedPlan','advanced')}
                    className={`SelectPlan-option ${selectedPlan === 'advanced' ? 'selectedPlan' : null}`}
                >
                    <div>
                        <img src={Advanced} />
                    </div>
                    <div>Advanced</div>
                    <div>
                        <div>${advancedPrice}/{scheduleAbbr}</div>
                        {isYrly && <div>2 months free</div>}  
                    </div>
                </div>
                <div 
                    onClick={() => handleStateChange('selectedPlan','pro')}
                    className={`SelectPlan-option ${selectedPlan === 'pro' ? 'selectedPlan' : null}`}
                >
                    <div>
                        <img src={Pro} />
                    </div>
                    <div>Pro</div>
                    <div>
                        <div>${proPrice}/{scheduleAbbr}</div>
                        {isYrly && <div>2 months free</div>}  
                    </div>
                </div>
            </div>
            <div className='SelectPlan-payScheduleOptions'>
                <div className='' onClick={() => handleStateChange('paySchedule','monthly')}>Monthly</div>
                <div>
                    <label className="switch">
                        <input onChange={() => null} checked={paySchedule === 'yearly'} type="checkbox" />
                        <span onClick={handleSwitchClick} className="slider round"></span>
                    </label>
                </div>
                <div className='' onClick={() => handleStateChange('paySchedule','yearly')}>Yearly</div>
            </div>
        </div>
    );
};

export default SelectPlan