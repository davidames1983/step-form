import React from 'react';
import PropTypes from 'prop-types';
import './StepWrapper.scss';

const StepWrapper = ({ title, subText, ...props }) => {
    return (
        <div className='StepWrapper'>
            {title && <div className='StepWrapper-title'>{title}</div>}
            {subText && <div className='StepWrapper-text'>{subText}</div>}
            <div className='StepWrapper-contentWrapper'>
                {props.children}
            </div>
        </div>
    );
};

StepWrapper.propTypes = {
    title: PropTypes.string,
    subText: PropTypes.string
};
  
StepWrapper.defaultProps = {
    title: null,
    subText: null
};  

export default StepWrapper