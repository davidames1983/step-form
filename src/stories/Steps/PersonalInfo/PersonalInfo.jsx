import React, { useState } from 'react';
import './PersonalInfo.scss';

const PersonalInfo = ({ handleStateChange, stepsState, stepsErrorState }) => {
    const { name, email, phone } = stepsState;
    const { name: nameError, email: emailError, phone: phoneError } = stepsErrorState;
    const [ activeElement, setActiveElement ] = useState(null);

    const onFocus = (key) => {
        setActiveElement(key);
    }
    const onBlur = () => {
        setActiveElement(null);
    }

    return (
        <div className='PersonalInfo'>
            <div className='PersonalInfo-name'>
                <div className='PersonalInfo-labelErrorWrapper'>
                    <div className='PersonalInfo-label'>Name</div>
                    <div className='PersonalInfo-error'>{activeElement === 'name' ? null : nameError}</div>
                </div>
                <input 
                    className={`PersonalInfo-textInput ${activeElement === 'name' ? 'inputActive' : (nameError ? 'inputHasErrors' : '') }`}
                    placeholder='e.g. Stephen King' 
                    onChange={(e) => handleStateChange("name", e.target.value)} 
                    value={name} 
                    type="text" 
                    onFocus={() => onFocus('name')}
                    onBlur={onBlur}
                />
            </div>
            <div className='PersonalInfo-email'>
                <div className='PersonalInfo-labelErrorWrapper'>
                    <div className='PersonalInfo-label'>Email Address</div>
                    <div className='PersonalInfo-error'>{activeElement === 'email' ? null : emailError}</div>
                </div>
                <input 
                    className={`PersonalInfo-textInput ${activeElement === 'email' ? 'inputActive' : (emailError ? 'inputHasErrors' : '') }`}
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={(e) => handleStateChange("email", e.target.value)} 
                    value={email} 
                    type="text" 
                    onFocus={() => onFocus('email')}
                    onBlur={onBlur}
                />
            </div>
            <div className='PersonalInfo-phone'>
                <div className='PersonalInfo-labelErrorWrapper'>
                    <div className='PersonalInfo-label'>Phone Number</div>
                    <div className='PersonalInfo-error'>{activeElement === 'phone' ? null : phoneError}</div>
                </div>
                <input 
                    className={`PersonalInfo-textInput ${activeElement === 'phone' ? 'inputActive' : (phoneError ? 'inputHasErrors' : '') }`}
                    placeholder='e.g. 1+ 234 567 8900'
                    onChange={(e) => handleStateChange("phone", e.target.value)} 
                    value={phone} 
                    type="text" 
                    onFocus={() => onFocus('phone')}
                    onBlur={onBlur}
                />
            </div>
        </div>
    );
};

export default PersonalInfo