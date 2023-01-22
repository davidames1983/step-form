import React from 'react';
import StepWrapper from './StepWrapper';

export default {
    title: 'StepForm/StepWrapper',
    component: StepWrapper,
    argTypes: {
        title: { control: 'text' },
        subText: { control: 'text' },
    },
};

const Template = (args) => <StepWrapper {...args} />;

export const Main = Template.bind({});
Main.args = {
    title: "Step One",
    subText: "Step One Subtext"
};
  