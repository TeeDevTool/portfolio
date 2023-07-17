import React, { useCallback, memo } from "react";
import Image from "next/image";
import NavigationMenus from "@app/components/Menus";
import { PersonalInformation } from "@app/common/enum";
import { toUpperCase } from "@app/utils/string.uitl";
import { isLaptopOrPC } from "@app/utils/general.util";

interface IntroductionProps {}

const MY_IMAGE = "/images/profile.jpg";
const IMAGE_ALT = "Tee's profile";

const Introduction: React.FC<IntroductionProps> = () => {
  const isPCSize = isLaptopOrPC();

  const renderMenus = useCallback(() => {
    if (!isPCSize) return null;
    return <NavigationMenus />;
  }, [isPCSize]);

  return (
    <section>
      <div>
        <h2 className="hoverableX1 w-fit">Hi! I'm Tee,</h2>
        <h2 className="hoverableX1  w-fit">
          <span className="mr-3">A</span>
          <span className="font-secondary font-bold">
            {toUpperCase(`${PersonalInformation.Role} ${PersonalInformation.Job} .`)}
          </span>
        </h2>
      </div>
      <p className="hoverableX1 description">
        A developer based in Bangkok, Thailand. As a developer, my goal is to deliver
        high-performance solutions to clients while also enhancing existing code bases to improve
        performance and create exceptional user experiences. I have experience in developing various
        platforms, including real estate, government, and financial platforms. My passion lies in
        becoming a versatile and skilled developer that can solve any problem. I am constantly
        motivated to learn new things and stay updated with the latest industry trends. In addition,
        I have target to relocating to new country and contributing my skills to exciting projects
        elsewhere.
      </p>
      <Image src={MY_IMAGE} alt={IMAGE_ALT} className="hoverableX2" width={584} height={631} />
      {renderMenus()}
    </section>
  );
};

export default memo(Introduction);
