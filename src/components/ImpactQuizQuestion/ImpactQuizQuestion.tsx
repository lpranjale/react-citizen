import { IconFamily } from "../../tokens/Iconography";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for ImpactQuizQuestion component
 */
export interface ImpactQuizQuestionProps {
  /**
   * Indication of whether the
   */
  answer?: Answer;

  /**
   * Icon to be displayed for question
   */
  icon: IconFamily;

  /**
   * Summary of the question
   */
  summary: string;

  /**
   * Description of the question
   */
  description: string;

  /**
   * Image to explain the question
   */
  image: string;

  /**
   * Action for positive feedback
   */
  onPositive: () => void;

  /**
   * Action for negative feedback
   */
  onNegative: () => void;
}

/**
 * Binary answer options
 */
export enum Answer {
  /**
   * Positive response
   */
  Positive = "positive",

  /**
   * Negative response
   */
  Negative = "negative",
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * ImpactQuizQuestion component
 */
export const ImpactQuizQuestion: FunctionComponent<ImpactQuizQuestionProps> = () => (
  <div className={styles}></div>
);
