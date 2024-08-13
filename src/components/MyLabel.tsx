import "./MyLabel.css";

interface MyLabelProps {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label Color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Font color
   */
  fontColor?: string;

  /**
   * Background color
   */
  backgroundColor?: string;
}

/**
 *
 * allCaps: boolean
 *
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
