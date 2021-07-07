import { Button, ButtonProps } from "./Button";
import { Icon, IconFamily } from "../Icon/Icon";
import { Story } from "@storybook/react";
import { Color, colors } from "../../tokens/Colorimetry";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=289%3A0";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty", "Text", "Icon", "IconWithText"],
      defaultValue: "Empty",
      mapping: {
        Text: "👇 Click Me!",
        Icon: <Icon family={IconFamily.Shield} />,
        IconWithText: (
          <>
            <Icon family={IconFamily.Shield} />
            👇 Click Me!
          </>
        ),
      },
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



export const Primary: Story<ButtonProps > = Template.bind({});
Primary.args = {hollow:true,color:Color.Primary,children:'Default'};
export const Secondary: Story<ButtonProps > = Template.bind({});
Secondary.args = {hollow:true,color:Color.Secondary,children:'Default'};
export const Ternary: Story<ButtonProps > = Template.bind({});
Ternary.args = {hollow:true,color:Color.Ternary,children:'Default'};

