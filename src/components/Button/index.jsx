import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    red_400: "bg-red-400",
    blue_A200: "bg-blue-A200",
    blue_gray_100: "bg-blue_gray-100 text-blue_gray-400_01",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-3.5",
  lg: "pr-2.5 py-[15px]",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xl",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_400",
    "blue_A200",
    "blue_gray_100",
    "blue_A700",
  ]),
};

export { Button };
