import styles from "./StyledButton.module.css";

const StyledButton = (props) => {
  const { color, hover, children, ...rest } = props;

  const getColors = (color) => {
    const colorMap = {
      primary: { color: "#ffffff", backgroundColor: "#37447e" },
      secondary: { color: "#37447e", backgroundColor: "#BAC3E5" },
      yellow: { color: "#222f65", backgroundColor: "#ffc93c" },
      pending: { color: "#000000", backgroundColor: "#D9D9D9"},
    };
    return colorMap[color] || {};
  };

  const inlineColorStyle = {
    ...getColors(color),
  };

  return (
    <button
      style={inlineColorStyle}
      className={`${styles.styledButton} ${
        hover ? styles.styledButtonHover : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default StyledButton;
