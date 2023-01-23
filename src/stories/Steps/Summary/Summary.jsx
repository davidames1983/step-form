import React, { useEffect, useState } from 'react';
import capitalize from '../../helpers';
import { PRICING } from '../../steps.config';
import './Summary.scss';

const Summary = ({ stepsState, setCurrentStep }) => {
    const { 
        paySchedule, 
        selectedPlan, 
        serviceAddOn,
        storageAddOn,
        profileAddOn 
    } = stepsState;

    const [addOnsTotal, setAddOnsTotal] = useState(0);
    const { scheduleAbbr, schedule, scheduleShort } = PRICING["schedules"][paySchedule];
    const price = PRICING[selectedPlan][paySchedule];

    const addOnsList = ['serviceAddOn', 'storageAddOn', 'profileAddOn'];
    const getAddOnsTotal = () => {
        const newAddOnsTotal = [serviceAddOn, storageAddOn, profileAddOn]
            .reduce((a,cv,i) => {
                const option = addOnsList[i];
                const addOnPrice = PRICING[option][paySchedule];
                if (cv) { a += addOnPrice }
                return a;
            },0)
        return newAddOnsTotal
    }

    useEffect(() => {
        const newAddOnsTotal = getAddOnsTotal();
        setAddOnsTotal(newAddOnsTotal);
    },[])

    const hasAddOns = serviceAddOn || storageAddOn || profileAddOn;
    const addOns = addOnsList.filter(addOn => stepsState[addOn]);

    return (
        <div className='Summary'>
            <div className='Summary-details'>
                <div className='Summary-planTotal'>
                    <div className='Summary-selectedPlan'>
                        <div className='Summary-selectedPlanText'>{capitalize(selectedPlan)} ({schedule})</div>
                        <div 
                            className='Summary-selectedPlanChange'
                            onClick={() => setCurrentStep(2)}
                        >Change</div>
                    </div>
                    <div className='Summary-planTotalAmount'>
                        ${price}/{scheduleAbbr}
                    </div>
                </div>
                {hasAddOns &&
                    <div className='Summary-addOns'>
                        {
                            addOns.map(addOn => (
                                <div className='Summary-addOn'>
                                    <div className='Summary-addOnLabel'>{PRICING[addOn]['label']}</div>
                                    <div className='Summary-addOnPrice'>+${PRICING[addOn][paySchedule]}/{scheduleAbbr}</div>
                                </div>
                            ))
                        }
                    </div>
                }   
            </div>
            <div className='Summary-total'>
                <div className='Summary-totalLabel'>Total (per {scheduleShort})</div>
                <div className='Summary-totalAmount'>+${addOnsTotal + price}/{scheduleAbbr}</div>
            </div>
        </div>
    );
};

export default Summary