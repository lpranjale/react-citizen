import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Loader component
 */
export interface LoaderProps {
  /**
   * Shows loading component if set, otherwise child component(s)
   */
  isLoading?: boolean;

  /**
   * Content to be displayed after loading finishes
   */
  children: React.ReactNode;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * Loader component
 */
export const Loader: FunctionComponent<LoaderProps> = () => (
  <div className={styles}></div>
);
