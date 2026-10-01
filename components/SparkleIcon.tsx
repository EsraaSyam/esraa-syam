type SparkleIconProps = { className?: string; size?: number };

export default function SparkleIcon({
  className = "",
  size = 26,
}: SparkleIconProps) {
  return (
    <span
      className={`sparkle ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}
