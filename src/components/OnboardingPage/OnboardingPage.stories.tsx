import { OnboardingPage, OnboardingPageProps } from "./OnboardingPage";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=671%3A407";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/OnboardingPage",
  component: OnboardingPage,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<OnboardingPageProps> = (args) => (
  <OnboardingPage {...args} />
);

/**
 * Component stories
 */
export const Default: Story<OnboardingPageProps> = Template.bind({});
Default.args = {};
