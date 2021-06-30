import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for ImpactStatement component
 */
export interface ImpactStatementProps {
  /**
   * Impact proposition
   */
  proposition?: string;

  /**
   * Error response for validating impact statement
   */
  error?: string;

  /**
   * Action for submitting an impact statement proposition
   */
  onSubmit: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * ImpactStatement component
 */
export const ImpactStatement: FunctionComponent<ImpactStatementProps> = () => (
  <form className={styles}></form>
);
