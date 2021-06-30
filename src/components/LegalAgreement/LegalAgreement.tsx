import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for LegalAgreement component
 */
export interface LegalAgreementProps {
  /**
   * Icon to be displayed for question
   */
  needsDisagreeConfirmation: boolean;

  /**
   * Action for agreement
   */
  onAgree: () => void;

  /**
   * Action for starting a disagreement
   */
  onDisagree: () => void;

  /**
   * Action for confirming a disagreement
   */
  onDisagreeConfirm: () => void;

  /**
   * Action for cancelling a disagreement
   */
  onDisagreeCancel: () => void;
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
