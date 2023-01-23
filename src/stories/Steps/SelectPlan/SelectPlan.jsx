import React from 'react';
import capitalize from '../../helpers';
import { PRICING, PLANS } from '../../steps.config';
import './SelectPlan.scss';

const SelectPlan = ({ handleStateChange, stepsState }) => {
    const { paySchedule, selectedPlan } = stepsState;

    const handleSwitchClick = () => {
        const newVal = paySchedule === 'yearly' ? 'monthly' : 'yearly';
        handleStateChange('paySchedule', newVal);
    }

    const { scheduleAbbr } = PRICING["schedules"][paySchedule];
    const isYrly = paySchedule === 'yearly';

    return (
        <div className='SelectPlan'>
            <div className='SelectPlan-options'>
                { 
                    PLANS.map((plan,i) => (
                        <div 
                            key={`plan-${i}`}
                            onClick={() => handleStateChange('selectedPlan',plan.name)}
                            className={`SelectPlan-option ${selectedPlan === plan.name ? 'selectedPlan' : null}`}
                        >
                            <div className='SelectPlan-image'>
                                <img src={plan.image} />
                            </div>
                           <div className='SelectPlan-planNameWrapper'>
                                <div className='SelectPlan-planName'>{capitalize(plan.name)}</div>
                                <div className='SelectPlan-pricingWrapper'>
                                    <div className='SelectPlan-pricing'>${PRICING[plan.name][paySchedule]}/{scheduleAbbr}</div>
                                    {isYrly && <div className='SelectPlan-freeText'>2 months free</div>}             
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='SelectPlan-payScheduleOptions'>
                <div
                    className={`SelectPlan-scheduleOption ${!isYrly ? 'selected' : null}`} 
                    onClick={() => handleStateChange('paySchedule','monthly')}
                >Monthly</div>
                <div>
                    <label className="switch">
                        <input onChange={() => null} checked={isYrly} type="checkbox" />
                        <span onClick={handleSwitchClick} className="slider round"></span>
                    </label>
                </div>
                <div
                    className={`SelectPlan-scheduleOption ${isYrly ? 'selected' : null}`} 
                    onClick={() => handleStateChange('paySchedule','yearly')}
                >Yearly</div>
            </div>
        </div>
    );
};

export default SelectPlan