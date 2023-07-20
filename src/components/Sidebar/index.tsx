import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import MenuIcon from "@app/asset/icons/menu";
import CloseIcon from "@app/asset/icons/close";
import { NavigateType } from "@app/hooks/useNavigate";
import { Menu } from "@app/common/enum";

export interface SidebarProps {
  onNavigate: (section: NavigateType) => void;
}

interface NavigationMenusVerticleProps {
  onNavigate: (section: NavigateType) => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [opened, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        handleClose();
      }
    }

    if (document) document.addEventListener("keydown", handleEscape);

    return () => {
      if (document) document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  useEffect(() => {
    if (sidebarRef.current) {
      if (opened) {
        sidebarRef.current?.classList.add("is-visible");
      } else {
        sidebarRef.current?.classList.remove("is-visible");
      }
    }
  }, [opened]);

  return (
    <div className="sidebar-wrapper">
      <button onClick={handleOpen}>
        <MenuIcon />
      </button>
      <div ref={sidebarRef} className="sidebar">
        <div className="sidebar-content">
          <CloseIcon onClick={handleClose} />
          <div className="sidebar-body">
            <NavigationMenusVerticle onNavigate={onNavigate} onClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationMenusVerticle: React.FC<NavigationMenusVerticleProps> = ({
  onNavigate,
  onClose,
}) => {
  const menus = useMemo(() => [Menu.Introduction, Menu.Skills, Menu.Experience, Menu.Projects], []);

  const handleClick = useCallback((menu: NavigateType) => {
    onClose();
    onNavigate(menu);
  }, []);

  return (
    <ul>
      {menus.map((menu) => (
        <li onClick={() => handleClick(menu)} key={`menu-ver-${menu}`}>
          {menu}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
