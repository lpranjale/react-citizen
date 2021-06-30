import { ButtonSet, ButtonSetProps } from "./ButtonSet";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=509%3A5";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/ButtonSet",
  component: ButtonSet,
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
const Template: Story<ButtonSetProps> = (args) => <ButtonSet {...args} />;

/**
 * Component stories
 */
export const Default: Story<ButtonSetProps> = Template.bind({});
Default.args = {};
