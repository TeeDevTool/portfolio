import { Menu } from "@app/common/enum";
import React, { memo, useMemo } from "react";

interface NavigationMenusProps {
  horizontal?: boolean;
}

const NavigationMenus: React.FC<NavigationMenusProps> = ({ horizontal }) => {
  const menus = useMemo(() => [Menu.Skills, Menu.Experience, Menu.Projects], []);

  return (
    <ul>
      {menus.map((menu) => (
        <li key={`menu-${menu}`}>
          <a className="clickable" href="#">
            {menu}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(NavigationMenus);
