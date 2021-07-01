import { Color } from "../../tokens/Colorimetry";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Button component
 */
export interface ButtonProps {
  /**
   * Indication of whether the button style is hollow
   */
  hollow?: boolean;

  /**
   * Color of the button
   */
  color?: Color;

  /**
   * Content displayed within the button
   */
  children?: React.ReactNode;

  /**
   * Primary action
   */
  onClick?: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * Button component
 */
export const Button: FunctionComponent<ButtonProps> = () => (
  <>
    <button className={styles}></button>
  </>
);
