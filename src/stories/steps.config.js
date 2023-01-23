import React from 'react';
import PersonalInfo from './Steps/PersonalInfo/PersonalInfo.jsx';
import SelectPlan from './Steps/SelectPlan/SelectPlan.jsx';
import AddOns from './Steps/AddOns/AddOns.jsx';
import Summary from './Steps/Summary/Summary.jsx';
import FinalPage from './Steps/FinalPage/FinalPage.jsx';

const STEPS = [
    {
        title: "Personal info",
        subText: "Please provide your name, email address, and phone number.",
        component: PersonalInfo,
        label: "YOUR INFO"
    },
    {
        title: "Select your plan",
        subText: "You have the option of monthly or yearly billing.",
        component: SelectPlan,
        label: "SELECT PLAN"
    },
    {
        title: "Pick add-ons",
        subText: "Add-ons help enhance your gaming experience.",
        component: AddOns,
        label: "ADD-ONS"
    },
    {
        title: "Finishing up",
        subText: "Double-check everything looks ok before confirming.",
        component: Summary,
        label: "SUMMARY"
    },
    {
        title: null,
        subText: null,
        component: FinalPage,
        label: null
    }
]

const INITIAL_STEPS_ERROR_STATE = {
    name: null,
    email: null,
    phone: null,
}

const INITIAL_STEPS_STATE = {
    name: "",
    email: "",
    phone: "",
    paySchedule: "monthly",
    selectedPlan: "arcade",
    serviceAddOn: false,
    storageAddOn: false,
    profileAddOn: false
}

const PRICING = {
    schedules: {
        monthly: { scheduleAbbr: 'mo', schedule: 'Monthly', scheduleShort: 'month' },
        yearly: { scheduleAbbr: 'yr', schedule: 'Yearly', scheduleShort: 'year' },
    },
    arcade: {
        monthly: 9,
        yearly: 90
    },
    advanced: {
        monthly: 12,
        yearly: 120
    },
    pro: {
        monthly: 15,
        yearly: 150
    },
    serviceAddOn: { 
        monthly: 1,
        yearly: 10
    },
    storageAddOn: { 
        monthly: 2,
        yearly: 20
    },
    profileAddOn: { 
        monthly: 2,
        yearly: 20
    },
}

export {
    STEPS,
    INITIAL_STEPS_STATE,
    INITIAL_STEPS_ERROR_STATE,
    PRICING
};

