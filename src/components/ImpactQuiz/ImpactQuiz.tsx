import { ImpactQuizQuestionProps } from "../ImpactQuizQuestion/ImpactQuizQuestion";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for ImpactQuiz component
 */
export interface ImpactQuizProps {
  /**
   * Current question number
   */
  questioNumber?: number;

  /**
   * Questions to be asked in the quiz
   */
  children: React.ReactElement<ImpactQuizQuestionProps>[];

  /**
   * Action taken when quiz is started
   */
  onStartQuiz: () => void;

  /**
   * Action taken when quiz is finished
   */
  onFinishQuiz: () => void;

  /**
   * Action to cycle to next question
   */
  onNextQuestion: () => void;

  /**
   * Action to cycle to previous question
   */
  onPreviousQuestion: () => void;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * ImpactQuiz component
 */
export const ImpactQuiz: FunctionComponent<ImpactQuizProps> = () => (
  <div className={styles}></div>
);
