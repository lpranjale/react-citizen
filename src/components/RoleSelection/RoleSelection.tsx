import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for RoleSelection component
 */
export interface RoleSelectionProps {
  /**
   * Action for teachers
   */
  onStudentSelection: () => void;

  /**
   * Action for students
   */
  onTeacherSelection: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * RoleSelection component
 */
export const RoleSelection: FunctionComponent<RoleSelectionProps> = () => (
  <div className={styles}></div>
);
