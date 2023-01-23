import React, { useState } from 'react';
import './PersonalInfo.scss';

const PersonalInfo = ({ handleStateChange, stepsState, stepsErrorState }) => {
    const [ activeElement, setActiveElement ] = useState(null);

    const onFocus = (key) => {
        setActiveElement(key);
    }
    const onBlur = () => {
        setActiveElement(null);
    }

    const PERSONAL_INFO = [
        {
            label: 'Name',
            id: 'name',
            placeholder: 'e.g. Stephen King'
        },
        {
            label: 'Email Address',
            id: 'email',
            placeholder: 'e.g. stephenking@lorem.com'
        },
        {
            label: 'Phone Number',
            id: 'phone',
            placeholder: 'e.g. 1+ 234 567 8900'
        }
    ]

    return (
        <div className='PersonalInfo'>
            {
                PERSONAL_INFO.map((info,i) => (
                    <div 
                        key={`info-${i}`}
                        className='PersonalInfo-name'
                    >
                        <div className='PersonalInfo-labelErrorWrapper'>
                            <div className='PersonalInfo-label'>{info.label}</div>
                            <div className='PersonalInfo-error'>{activeElement === info.id ? null : stepsErrorState[info.id]}</div>
                        </div>
                        <input 
                            className={`PersonalInfo-textInput ${activeElement === info.id ? 'inputActive' : (stepsErrorState[info.id] ? 'inputHasErrors' : '') }`}
                            placeholder={info.placeholder} 
                            onChange={(e) => handleStateChange(info.id, e.target.value)} 
                            value={stepsState[info.id]} 
                            type="text" 
                            onFocus={() => onFocus(info.id)}
                            onBlur={onBlur}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default PersonalInfo