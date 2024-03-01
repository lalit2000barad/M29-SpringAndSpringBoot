import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyRegular14Black900: "font-gilroy font-normal",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
