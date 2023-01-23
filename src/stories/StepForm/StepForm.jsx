import React, { useState, useEffect } from 'react';
import './StepForm.scss';
import BGDesktop from '../assets/bg-sidebar-desktop.svg';
import BGMobile from '../assets/bg-sidebar-mobile.svg';
import StepProgressItem from '../StepProgressItem/StepProgressItem.jsx';
import StepWrapper from '../StepWrapper/StepWrapper.jsx';
import { STEPS, INITIAL_STEPS_STATE, INITIAL_STEPS_ERROR_STATE } from '../steps.config';
import validateInfoForm from '../validate';

const StepForm = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentStep, setCurrentStep] = useState(1);
    const [stepsState, setStepsState] = useState(INITIAL_STEPS_STATE);
    const [stepsErrorState, setStepsErrorState] = useState(INITIAL_STEPS_ERROR_STATE);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const isMobile = width <= 1050;

    const getNextBtnDisabled = () => {
        if (currentStep === 1) {
            const { name, email, phone } = stepsErrorState;
            const { name: n, email: e, phone: p } = stepsState;
            const hasLen = (str) => str.length > 0;
            return (name || email || phone) || (!hasLen(n) || !hasLen(e) || !hasLen(p))
        } else {
            return false;
        }
    }

    const handleStateChange = (key, value) => {
        const newErrorState = validateInfoForm(key, value, stepsErrorState);
        setStepsErrorState(newErrorState);
        setStepsState(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    useEffect(() => {
        // TODO uncomment
        // const nextBtnState = getNextBtnDisabled();
        const nextBtnState = false;
        setNextBtnDisabled(nextBtnState);
    },[stepsState])

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    },[]);

    return (
        <div className='StepForm'>
            <div
                className='StepForm-sidebar'
                style={{ backgroundImage: `url(${isMobile ? BGMobile : BGDesktop})` }}
            >
                <div className='StepForm-progressWrapper'>
                    {STEPS.map((step,i) => (
                        step.label ? (
                            <StepProgressItem 
                                key={`label-${i}`}
                                active={currentStep === (i + 1)}
                                mobile={isMobile}
                                label={step.label}
                                step={`${i + 1}`}
                            />
                        ) : (
                            null
                        )
                    ))}
                </div>
            </div>

            <div className='StepForm-contentWrapper'>
                <div className='StepForm-content'>
                    {STEPS.map((s,i) => {
                        return currentStep - 1 === i ? 
                            <StepWrapper key={`step-${i}`} title={s.title} subText={s.subText}>
                                <s.component 
                                    handleStateChange={handleStateChange}
                                    stepsErrorState={stepsErrorState}
                                    stepsState={stepsState}
                                    setCurrentStep={setCurrentStep}
                                />
                            </StepWrapper> : null
                    })}
                </div>
                {currentStep !== 5 &&
                    <div className='StepForm-navigation'>
                        {currentStep > 1 ? 
                            (<button 
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className='StepForm-goBackBtn'
                            >Go Back</button>) : (<div/>)
                        }
                        {currentStep < 5 && 
                            <button 
                                disabled={nextBtnDisabled}
                                onClick={() => setCurrentStep(currentStep + 1)}
                                className={`StepForm-nextBtn ${nextBtnDisabled ? 'btnDisabled' : ''}`}
                            >{currentStep === 4 ? 'Confirm' : 'Next Step'}</button>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default StepForm