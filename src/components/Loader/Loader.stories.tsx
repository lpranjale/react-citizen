import { Loader, LoaderProps } from "./Loader";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=670%3A572";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/Loader",
  component: Loader,
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
const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

/**
 * Component stories
 */
export const Default: Story<LoaderProps> = Template.bind({});
Default.args = {};
