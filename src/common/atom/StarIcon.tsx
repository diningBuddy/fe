import React from "react";
import Svg, { Path } from "react-native-svg";

interface StarIconProps {
  size: "sm" | "lg";
  type: "filled" | "outline";
}

const StarIcon: React.FC<StarIconProps> = ({ size, type }) => {
  const dimensions = size === "sm" ? { width: 16, height: 16 } : { width: 24, height: 24 };

  if (type === "filled") {
    return (
      <Svg {...dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z"
          fill="#FF5967"
        />
      </Svg>
    );
  }

  // Outline
  return (
    <Svg {...dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z"
        fill="#D9D9D9"
      />
    </Svg>
  );
};

export default StarIcon;
