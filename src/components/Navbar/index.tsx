import React, { memo, useEffect } from "react";
import Image from "next/image";
import GithubIcon from "@app/asset/icons/github";
import LinkedinIcon from "@app/asset/icons/linkedin";
import EmailIcon from "@app/asset/icons/email";
import { Menu, PersonalInformation } from "@app/common/enum";
import { NavigateType } from "@app/hooks/useNavigate";
import Menus from "../Menus";
import Sidebar from "../Sidebar";

interface NavbarProps {
  onNavigate: (section: NavigateType) => void;
}

const LOGO_IMAGE = "/images/logo.png";
const LOGO_ALT = "Tee's logo";

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav>
      <div className="flex items-center">
        <Sidebar onNavigate={onNavigate} />
        <Image
          className="logo"
          onClick={() => onNavigate(Menu.Introduction)}
          src={LOGO_IMAGE}
          alt={LOGO_ALT}
          width={80}
          height={50}
        />
        <Menus onNavigate={onNavigate} navable />
      </div>
      <div className="contact-me">
        <a target="_blank" href={PersonalInformation.Linkedin}>
          <LinkedinIcon />
        </a>
        <a target="_blank" href={PersonalInformation.Github}>
          <GithubIcon />
        </a>
        <a href={`mailto:${PersonalInformation.Email}?subject=contact-me`}>
          <EmailIcon />
        </a>
      </div>
    </nav>
  );
};

export default memo(Navbar);
