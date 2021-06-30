import { IconFamily } from "../../tokens/Iconography";
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
  family: IconFamily;

  /**
   * Color of the Icon
   */
  color?: Color;

  /**
   * Content displayed within the Icon
   */
  children?: React.ReactNode;
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

/**
 * The icon family
 */
export { IconFamily };
