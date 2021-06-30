import { Button, ButtonProps } from "./Button";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=289%3A0";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/Button",
  component: Button,
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
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

/**
 * Component stories
 */
export const Default: Story<ButtonProps> = Template.bind({});
Default.args = {};
