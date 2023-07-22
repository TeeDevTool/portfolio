import { NavigateType } from "@app/hooks/useNavigate";
import { Menu } from "@app/common/enum";
import React, { memo, useMemo } from "react";

interface NavigationMenusProps {
  onNavigate: (section: NavigateType) => void;
  navable?: boolean;
}

const NavigationMenus: React.FC<NavigationMenusProps> = ({ onNavigate, navable }) => {
  const menus = useMemo(() => [Menu.Skills, Menu.Experience, Menu.Projects], []);

  return (
    <ul className="menu-bar">
      {menus.map((menu) => (
        <li onClick={() => onNavigate(menu)} key={`menu-${menu}`}>
          {navable ? (
            <div className="nav-menu">{menu}</div>
          ) : (
            <a data-content={menu} className="clickable">
              {menu}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default memo(NavigationMenus);
