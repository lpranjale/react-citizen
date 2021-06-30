import { Registration, RegistrationProps } from "./Registration";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=671%3A408";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/Registration",
  component: Registration,
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
const Template: Story<RegistrationProps> = (args) => <Registration {...args} />;

/**
 * Component stories
 */
export const Default: Story<RegistrationProps> = Template.bind({});
Default.args = {};
