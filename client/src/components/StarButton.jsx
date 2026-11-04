
import StarBorder from "./StarBorder";

const StarButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <StarBorder
      color="#5CFFC8"
      trailColor="#5CFFC8"
      duration={4}
      direction="clockwise"
      stars={1}
      trailLength={0.3}
      thickness={1}
      radius={50}
      glow={0.6}
      hover="lap"
      sparkle={false}
      clickPulse
      theme="dark"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`w-full flex items-center justify-center gap-3 px-4 py-4 rounded-full bg-card text-white font-semibold cursor-pointer transition-all duration-300 hover:bg-[#5CFFC8] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {children}
      </button>
    </StarBorder>
  );
};

export default StarButton;
