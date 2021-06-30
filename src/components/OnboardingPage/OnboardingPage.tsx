import { ImpactQuizProps } from "../ImpactQuiz/ImpactQuiz";
import { ImpactStatementProps } from "../ImpactStatement/ImpactStatement";
import { LegalAgreementProps } from "../LegalAgreement/LegalAgreement";
import { RegistrationProps } from "../Registration/Registration";
import { RoleSelectionProps } from "../RoleSelection/RoleSelection";
import { SchoolEntranceProps } from "../SchoolEntrance/SchoolEntrance";
import { WelcomeMatProps } from "../WelcomeMat/WelcomeMat";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for OnboardingPage component
 */
export interface OnboardingPageProps {
  /**
   * Onboarding stage to display
   */
  children?: React.ReactElement<
    | RoleSelectionProps
    | SchoolEntranceProps
    | RegistrationProps
    | LegalAgreementProps
    | ImpactQuizProps
    | ImpactStatementProps
    | WelcomeMatProps
  >;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * OnboardingPage component
 */
export const OnboardingPage: FunctionComponent<OnboardingPageProps> = () => (
  <div className={styles}></div>
);
