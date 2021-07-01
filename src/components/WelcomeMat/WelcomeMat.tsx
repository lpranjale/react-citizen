import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for WelcomeMat component
 */
export interface WelcomeMatProps {
  /**
   * Action to enter the platform
   */
  onForward: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * WelcomeMat component
 */
export const WelcomeMat: FunctionComponent<WelcomeMatProps> = () => (
  <div className={styles}></div>
);
