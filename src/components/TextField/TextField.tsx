import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for TextField component
 */
export interface TextFieldProps {
  /**
   * Title of the text field
   */
  title?: string;

  /**
   * Text shown in field
   */
  text: string;

  /**
   * Feedback for text validation
   */
  feedback?: string;

  /**
   * Tone for feedback
   */
  sentiment?: Sentiment;

  /**
   * Format of the text field (i.e., password, email, etc.)
   */
  format?: TextFieldFormat;
}

export enum TextFieldFormat {
  /**
   * Format for dates
   */
  Date = "date",

  /**
   * Format for date & time fields
   */
  DateTime = "datetime-local",

  /**
   * Format for emails
   */
  Email = "email",
  /**
   * Format for images
   */
  Image = "image",

  /**
   * Format for numbers
   */
  Number = "number",

  /**
   * Format for passwords
   */
  Password = "password",

  /**
   * Format for search fields
   */
  Search = "search",

  /**
   * Format for telephone numbers
   */
  Telephone = "tel",

  /**
   * Format for basic text
   */
  Text = "text",

  /**
   * Format for date fields
   */
  Time = "time",

  /**
   * Format for URLs
   */
  URL = "url",

  /**
   * Format for weeks
   */
  Week = "week",
}

/**
 * Sentiment options for feedback
 */
export enum Sentiment {
  /**
   * Sentiment for positive feedback
   */
  Positive = "positive",

  /**
   * Sentiment for negative feedback
   */
  Negative = "negative",
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * TextField component
 */
export const TextField: FunctionComponent<TextFieldProps> = () => (
  <input className={styles}></input>
);
