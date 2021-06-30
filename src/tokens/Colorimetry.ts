/**
 * List of color options
 */
export enum Color {
  /**
   * Coloring for primary actions
   */
  Primary = "primary",

  /**
   * Coloring for secondary actions
   */
  Secondary = "secondary",

  /**
   * Coloring for ternary actions
   */
  Ternary = "ternary",

  /**
   * Coloring for positive feedback events
   */
  Positive = "positive",

  /**
   * Coloring for negative feedback events
   */
  Negative = "negative",

  /**
   * Coloring for completed actions
   */
  Dark = "dark",

  /**
   * Coloring for descriptive
   */
  Medium = "medium",

  /**
   * Coloring for suttle display
   */
  Light = "light",

  /**
   * Coloring for faint display
   */
  Lighter = "lighter",
}

/**
 * List of color codes
 */
export const colors: { [key in Color]: string } = {
  [Color.Primary]: "#232a3a",
  [Color.Secondary]: "#3bd0f2",
  [Color.Ternary]: "#a4eeff",
  [Color.Positive]: "#1ee255",
  [Color.Negative]: "#f37766",
  [Color.Dark]: "#434343",
  [Color.Medium]: "#888888",
  [Color.Light]: "#c4c4c4",
  [Color.Lighter]: "#e5e5e5",
};
