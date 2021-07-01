import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for SchoolEntrance component
 */
export interface SchoolEntranceProps {
  /**
   * School code entered by the user
   */
  schoolCode?: string;

  /**
   * School name corresponding to the school code
   */
  schoolName?: string;

  /**
   * Error message for school validation
   */
  error?: string;

  /**
   * Action to submit school code
   */
  onForward: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * SchoolEntrance component
 */
export const SchoolEntrance: FunctionComponent<SchoolEntranceProps> = () => (
  <div className={styles}></div>
);
