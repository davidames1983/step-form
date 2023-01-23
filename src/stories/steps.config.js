import PersonalInfo from './Steps/PersonalInfo/PersonalInfo.jsx';
import SelectPlan from './Steps/SelectPlan/SelectPlan.jsx';
import AddOns from './Steps/AddOns/AddOns.jsx';
import Summary from './Steps/Summary/Summary.jsx';
import FinalPage from './Steps/FinalPage/FinalPage.jsx';
import Arcade from './assets/icon-arcade.svg';
import Advanced from './assets/icon-advanced.svg';
import Pro from './assets/icon-pro.svg';

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
        yearly: 10,
        label: "Online service"
    },
    storageAddOn: { 
        monthly: 2,
        yearly: 20,
        label: "Larger storage"
    },
    profileAddOn: { 
        monthly: 2,
        yearly: 20,
        label: "Customizable profile"
    },
}

const PLANS = [
    {
        name: 'arcade',
        image: Arcade,
    },
    {
        name: 'advanced',
        image: Advanced,
    },
    {
        name: 'pro',
        image: Pro,
    }
]

const ADD_ONS = [
    { 
        name: 'serviceAddOn', 
        label: 'Online service',
        description: 'Access to multiplayer games'
    },
    { 
        name: 'storageAddOn', 
        label: 'Larger storage',
        description: 'Extra 1TB of cloud save'
    },
    { 
        name: 'profileAddOn', 
        label: 'Customizable profile',
        description: 'Custom theme on your profile'
    }
]

export {
    STEPS,
    INITIAL_STEPS_STATE,
    INITIAL_STEPS_ERROR_STATE,
    PRICING,
    ADD_ONS,
    PLANS
};

