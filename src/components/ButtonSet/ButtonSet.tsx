import { ButtonProps } from "../Button/Button";
import { Spacing } from "../../tokens/Geography";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for ButtonSet component
 */
export interface ButtonSetProps {
  /**
   * Spacing for buttons within the set
   */
  spacing?: Spacing;

  /**
   * List of buttons within the set
   */
  children: React.ReactElement<ButtonProps>[];
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * ButtonSet component
 */
export const ButtonSet: FunctionComponent<ButtonSetProps> = () => (
  <div className={styles}></div>
);
