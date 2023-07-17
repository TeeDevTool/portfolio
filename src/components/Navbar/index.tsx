import React, { memo } from "react";
import Image from "next/image";
import GithubIcon from "@app/asset/icons/github";
import LinkedinIcon from "@app/asset/icons/linkedin";
import EmailIcon from "@app/asset/icons/email";
import { PersonalInformation } from "@app/common/enum";

interface NavbarProps {}

const LOGO_IMAGE = "/images/logo.png";
const LOGO_ALT = "Tee's logo";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <div className="logo">
        <Image src={LOGO_IMAGE} alt={LOGO_ALT} width={80} height={50} />
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
