import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Logo component
 */
export interface LogoProps {
  /**
   * Logo form
   */
  form: LogoForm;

  /**
   * Action to perform when logo is clicked
   */
  onClick: () => void;
}

/**
 * Logo form options
 */
export enum LogoForm {
  /**
   * Short form for logos
   */
  Short = "short",

  /**
   * Long form for logos
   */
  Long = "long",
}

/**
 * List of styles to apply to the component
 */
const styles = classNames();

/**
 * Logo component
 */
export const Logo: FunctionComponent<LogoProps> = () => (
  <img className={styles} alt="Logo"></img>
);
