import React from 'react';
import StepProgressItem from './StepProgressItem';

export default {
    title: 'StepForm/StepProgressItem',
    component: StepProgressItem,
    argTypes: {
        mobile: { control: 'boolean' },
        active: { control: 'boolean' },
        step: { control: 'text' },
        label: { control: 'text' },
    },
};

const Template = (args) => (
    <div style={{ backgroundColor: "#473DFF" }}>
        <StepProgressItem {...args} />
    </div>
);

export const Main = Template.bind({});
Main.args = {
    mobile: false,
    active: false,
    step: "1",
    label: "YOUR INFO"
};
  