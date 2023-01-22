import React from 'react';
import PropTypes from 'prop-types';
import './StepProgressItem.scss';

const StepProgressItem = ({ ...props }) => {

    return (
        <div className='StepProgressItem'>
            <div className={`StepProgressItem-number ${props.active ? 'StepProgressItem-number--active' : ''}`}>{props.step}</div>
            {!props.mobile && <div className='StepProgressItem-text'>
                <div className='StepProgressItem-stepNumber'>STEP {props.step}</div>
                <div className='StepProgressItem-stepLabel'>{props.label}</div>
            </div>}
        </div>
    );
};

StepProgressItem.propTypes = {
    mobile: PropTypes.bool,
    step: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
};
  
StepProgressItem.defaultProps = {
    mobile: false,
    active: false,
    step: "1",
    label: "First Step"
};  

export default StepProgressItem