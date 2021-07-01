import { Logo, LogoProps } from "./Logo";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "hhttps://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=670%3A573";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/Logo",
  component: Logo,
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
const Template: Story<LogoProps> = (args) => <Logo {...args} />;

/**
 * Component stories
 */
export const Default: Story<LogoProps> = Template.bind({});
Default.args = {};
