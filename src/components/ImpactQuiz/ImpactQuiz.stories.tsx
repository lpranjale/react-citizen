import { ImpactQuiz, ImpactQuizProps } from "./ImpactQuiz";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=670%3A567";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/ImpactQuiz",
  component: ImpactQuiz,
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
const Template: Story<ImpactQuizProps> = (args) => <ImpactQuiz {...args} />;

/**
 * Component stories
 */
export const Default: Story<ImpactQuizProps> = Template.bind({});
Default.args = {};
