import { IconName } from "../../tokens/Iconography";
import { Color } from "../../tokens/Colorimetry";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Icon component
 */
export interface IconProps {
  /**
   * The name of the icon to use
   */
  icon: IconName;

  /**
   * Color of the Icon
   */
  color?: Color;

  /**
   * Content displayed within the Icon
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
 * Icon component
 */
export const Icon: FunctionComponent<IconProps> = () => (
  <svg className={styles}></svg>
);
