import React, { useState } from 'react';
import Arcade from '../../assets/icon-arcade.svg';
import Advanced from '../../assets/icon-advanced.svg';
import Pro from '../../assets/icon-pro.svg';
import './SelectPlan.scss';

const SelectPlan = ({ handleStateChange, stepsState }) => {
    const { paySchedule, selectedPlan } = stepsState;
    const [ activeElement, setActiveElement ] = useState(null);

    const handleSwitchClick = () => {
        const newVal = paySchedule === 'yearly' ? 'monthly' : 'yearly';
        handleStateChange('paySchedule', newVal);
    }

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
                    {paySchedule === 'monthly' && 
                        <div>
                            <div>$9/mo</div>
                        </div>
                    }
                    {paySchedule === 'yearly' && 
                        <div>
                            <div>$90/yr</div>
                            <div>2 months free</div>
                        </div>
                    }                
                </div>
                <div 
                    onClick={() => handleStateChange('selectedPlan','advanced')}
                    className={`SelectPlan-option ${selectedPlan === 'advanced' ? 'selectedPlan' : null}`}
                >
                    <div>
                        <img src={Advanced} />
                    </div>
                    <div>Advanced</div>
                    {paySchedule === 'monthly' && 
                        <div>
                            <div>$12/mo</div>
                        </div>
                    }
                    {paySchedule === 'yearly' && 
                        <div>
                            <div>$120/yr</div>
                            <div>2 months free</div>
                        </div>
                    }
                </div>
                <div 
                    onClick={() => handleStateChange('selectedPlan','pro')}
                    className={`SelectPlan-option ${selectedPlan === 'pro' ? 'selectedPlan' : null}`}
                >
                    <div>
                        <img src={Pro} />
                    </div>
                    <div>Pro</div>
                    {paySchedule === 'monthly' && 
                        <div>
                            <div>$15/mo</div>
                        </div>
                    }
                    {paySchedule === 'yearly' && 
                        <div>
                            <div>$150/yr</div>
                            <div>2 months free</div>
                        </div>
                    }
                </div>
            </div>
            <div className='SelectPlan-payScheduleOptions'>
                <div className='' onClick={() => handleStateChange('paySchedule','monthly')}>Monthly</div>
                <div>
                    <label class="switch">
                        <input onChange={() => null} checked={paySchedule === 'yearly'} type="checkbox" />
                        <span onClick={handleSwitchClick} class="slider round"></span>
                    </label>
                </div>
                <div className='' onClick={() => handleStateChange('paySchedule','yearly')}>Yearly</div>
            </div>
        </div>
    );
};

export default SelectPlan