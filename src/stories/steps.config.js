import React from 'react';
import PersonalInfo from './Steps/PersonalInfo/PersonalInfo.jsx';
import SelectPlan from './Steps/SelectPlan/SelectPlan.jsx';

const StepThreeContent = () => (
    <div>Step Three Content</div>
)

const StepFourContent = () => (
    <div>Step Four Content</div>
)

const StepFiveContent = () => (
    <div>Step Five Content</div>
)


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
        component: StepThreeContent,
        label: "ADD-ONS"
    },
    {
        title: "Finishing up",
        subText: "Double-check everything looks ok before confirming.",
        component: StepFourContent,
        label: "SUMMARY"
    },
    {
        title: null,
        subText: null,
        component: StepFiveContent,
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
    selectedPlan: "arcade"
}

export {
    STEPS,
    INITIAL_STEPS_STATE,
    INITIAL_STEPS_ERROR_STATE
};

