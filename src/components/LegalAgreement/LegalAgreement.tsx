import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for LegalAgreement component
 */
export interface LegalAgreementProps {
  /**
   * Legal agreement phase
   */
  phase?: LegalAgreementPhase;

  /**
   * Action for moving forward in the legal agreement
   */
  onForward: () => void;

  /**
   * Action for moving back in the legal agreement
   */
  onBackward: () => void;
}

/**
 * The phase of the legal agreement
 */
export enum LegalAgreementPhase {
  /**
   * Initial phase of legal agreement
   */
  Begin = "begin",

  /**
   * Legal agreement has been read
   */
  Read = "read",

  /**
   * Initial phase of disagreement
   */
  Disagree = "disagree",
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * LegalAgreement component
 */
export const LegalAgreement: FunctionComponent<LegalAgreementProps> = () => (
  <div className={styles}></div>
);
