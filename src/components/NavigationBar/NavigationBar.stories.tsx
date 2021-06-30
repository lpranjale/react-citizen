import { NavigationBar, NavigationBarProps } from "./NavigationBar";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=671%3A406";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/NavigationBar",
  component: NavigationBar,
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
const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args} />
);

/**
 * Component stories
 */
export const Default: Story<NavigationBarProps> = Template.bind({});
Default.args = {};
