import { TextFieldProps } from "../TextField/TextField";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Registration component
 */
export interface RegistrationProps {
  /**
   * Content to be displayed after login
   */
  children: React.ReactElement<TextFieldProps>[];

  /**
   * Action to submit a registration
   */
  onForward: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * Registration component
 */
export const Registration: FunctionComponent<RegistrationProps> = () => (
  <form className={styles}></form>
);
