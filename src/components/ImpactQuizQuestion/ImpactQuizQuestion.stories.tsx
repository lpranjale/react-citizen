import {
  ImpactQuizQuestion,
  ImpactQuizQuestionProps,
} from "./ImpactQuizQuestion";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=670%3A568";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/ImpactQuizQuestion",
  component: ImpactQuizQuestion,
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
const Template: Story<ImpactQuizQuestionProps> = (args) => (
  <ImpactQuizQuestion {...args} />
);

/**
 * Component stories
 */
export const Default: Story<ImpactQuizQuestionProps> = Template.bind({});
Default.args = {};
