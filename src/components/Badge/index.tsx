import React, { memo } from "react";
import { capitalize } from "@app/utils/string.uitl";

interface BadgeProps {
  children: string | React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  let value = children;

  if (typeof value === "string") value = capitalize(value);

  return <h5 className="w-fit">{value}</h5>;
};

export default memo(Badge);
