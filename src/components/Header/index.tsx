import React, { memo } from "react";
import { capitalize } from "@app/utils/string.uitl";

export enum HeaderBG {
  Dark = "dark",
  Light = "light",
  Grey = "grey",
}

interface HeaderProps {
  children: string | React.ReactNode;
  bg?: HeaderBG.Dark | HeaderBG.Light | HeaderBG.Grey;
  bold?: boolean;
  bottom?: number;
}

const Header: React.FC<HeaderProps> = ({ children, bg, bold, bottom }) => {
  let value = children;

  if (typeof value === "string") value = capitalize(value);

  return (
    <h3 className={`${bg && "bg-" + bg} ${bold && "font-bold"} ${bottom && `mb-8`}`}>{value}</h3>
  );
};

export default memo(Header);
