import { useCallback, useRef } from "react";
import { Menu } from "@app/common/enum";

export type NavigateType = Menu.Introduction | Menu.Skills | Menu.Experience | Menu.Projects;

const useNavigate = () => {
  const introductionRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  const navigateTo = useCallback((ref: React.MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onNavigate = useCallback(
    (section: NavigateType) => {
      switch (section) {
        case Menu.Introduction:
          navigateTo(introductionRef);
          break;
        case Menu.Skills:
          navigateTo(skillsRef);
          break;
        case Menu.Experience:
          navigateTo(experienceRef);
          break;
        case Menu.Projects:
          navigateTo(projectsRef);
          break;
        default:
          break;
      }
    },
    [introductionRef.current, skillsRef.current, experienceRef.current, projectsRef.current]
  );

  return {
    introductionRef,
    skillsRef,
    experienceRef,
    projectsRef,
    onNavigate,
  };
};

export default useNavigate;
