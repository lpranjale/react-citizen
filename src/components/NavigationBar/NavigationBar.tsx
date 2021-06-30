import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for NavigationBar component
 */
export interface NavigationBarProps {
  /**
   * Logged in users can navigate
   */
  isLoggedIn?: boolean;

  /**
   * Content to be displayed after login
   */
  children: React.ReactNode;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * NavigationBar component
 */
export const NavigationBar: FunctionComponent<NavigationBarProps> = () => (
  <div className={styles}></div>
);
