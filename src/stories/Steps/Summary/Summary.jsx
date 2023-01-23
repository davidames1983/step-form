import React, { useEffect, useState } from 'react';
import capitalize from '../../helpers';
import { PRICING } from '../../steps.config';
import './Summary.scss';

const Summary = ({ stepsState }) => {
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

    const getAddOnsTotal = () => {
        const addOnsList = ['serviceAddOn', 'storageAddOn', 'profileAddOn'];
        const newAddOnsTotal = [serviceAddOn, storageAddOn, profileAddOn]
            .reduce((a,cv,i) => {
                console.log("a - initial:", a);
                const option = addOnsList[i];
                const addOnPrice = PRICING[option][paySchedule];
                if (cv) { a += addOnPrice }
                return a;
            },0)
        return newAddOnsTotal
    }

    useEffect(() => {
        const newAddOnsTotal = getAddOnsTotal();
        console.log("newAddOnsTotal:", newAddOnsTotal);
        setAddOnsTotal(newAddOnsTotal);
    },[])

    return (
        <div className='Summary'>
            <div className='Summary-details'>
                <div className='Summary-planTotal'>
                    <div className='Summary-selectedPlan'>
                        <div>{capitalize(selectedPlan)} ({schedule})</div>
                        <div>Change</div>
                    </div>
                    <div className='Summary-planTotalAmount'>
                        ${price}/{scheduleAbbr}
                    </div>
                </div>
            </div>
            <div className='Summary-total'>
                <div className='Summary-totalLabel'>Total (per {scheduleShort})</div>
                <div className='Summary-totalAmount'>${addOnsTotal}/{scheduleAbbr}</div>
            </div>
        </div>
    );
};

export default Summary