import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  className,
  size,
}) => {
  const IconElement = IconComponent as React.ComponentType<{
    className?: string;
    size?: number;
  }>;
  return <IconElement className={className} size={size} />;
};

export default Icon;
