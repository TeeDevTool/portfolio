import React, { memo, useCallback, useState } from "react";
import Card from "@app/components/Card";
import Header, { HeaderBG } from "@app/components/Header";
import Modal, { ModalProps } from "@app/components/Modal";
import { PersonalInformation, Project, Skills } from "@app/common/enum";

interface ProjectsProps {
  reference: React.MutableRefObject<HTMLElement | null>;
}

const DEFAULT_PROJECT = {
  title: null,
  content: null,
};

const projects = [
  {
    title: Project.ThaiWaterPlan,
    description: Project.Developer,
    cover: "twp",
    workplace: PersonalInformation.Klickerlab,
  },
  {
    title: Project.Smartfinn,
    description: Project.Developer,
    cover: "smartfinn",
    workplace: PersonalInformation.Head2toes,
  },
  {
    title: Project.Workspace,
    description: Project.Developer,
    cover: "workspace",
    workplace: PersonalInformation.Refinitiv,
  },
  {
    title: Project.Nexter,
    description: Project.Developer,
    cover: "nexter",
    workplace: PersonalInformation.SevenPeaks,
  },
];

const projectDetails: { [key: string]: Omit<ModalProps, "onClose"> } = {
  [Project.ThaiWaterPlan]: {
    title: Project.ThaiWaterPlan,
    workplace: PersonalInformation.Klickerlab,
    workplaceURL: "https://www.klickerlab.com/",
    position: "Full-stack developer",
    content:
      "The Thai Water Plan project is a system designed to allocate the budget of the Office of the National Water Resources through a modern and user-friendly interface",
    stacks: [
      Skills.React,
      Skills.Redux,
      Skills.StyledComponents,
      Skills.MUI,
      Skills.Nodejs,
      Skills.GraphQL,
      Skills.MySQL,
      Skills.PostgreSQL,
      Skills.Docker,
      Skills.GA4,
      Skills.Cypress,
    ],
  },
  [Project.Smartfinn]: {
    title: Project.Smartfinn,
    workplace: PersonalInformation.Head2toes,
    workplaceURL: "https://www.head2toes.co.th/",
    demoURL: "https://www.smartfinn.co.th/",
    position: "Frontend developer (Admin platform)",
    content:
      "Smartfinn is a highly trusted and standardized matching platform for property sales and rentals between sellers and investors",
    stacks: [Skills.NextJS, Skills.Redux, Skills.CSS],
  },
  [Project.Workspace]: {
    title: Project.Workspace,
    workplace: PersonalInformation.Refinitiv,
    workplaceURL: "https://www.refinitiv.com/en",
    position: "Frontend developer (Trading UI)",
    content:
      "Refinitiv Workspace is a new desktop platform that provides all the financial information you need for investment and also has a trading platform, making your workspace complete in just one Workspace",
    stacks: [
      Skills.Typescript,
      Skills.React,
      Skills.Redux,
      Skills.CSS,
      Skills.Jest,
      Skills.Jenkins,
    ],
  },
  [Project.Nexter]: {
    title: Project.Nexter,
    workplace: PersonalInformation.SevenPeaks,
    workplaceURL: "https://sevenpeakssoftware.com/th/",
    position: "Senior frontend developer",
    content:
      "Nexter project or One dooDeco is backoffice project that created for solve pain point of client which is reduce human error, add more automatic process with the design that very simple but also challenging",
    stacks: [
      Skills.Typescript,
      Skills.React,
      Skills.NextJS,
      Skills.Tailwind,
      Skills.ReactHookForm,
      Skills.ReactQuery,
      Skills.Zod,
      Skills.Nodejs,
      Skills.TRPC,
      Skills.PostgreSQL,
      Skills.Prisma,
    ],
  },
};

const Projects: React.FC<ProjectsProps> = ({ reference }) => {
  const [project, setProject] = useState<Omit<ModalProps, "onClose">>(DEFAULT_PROJECT);

  const setCurrentProject = useCallback(
    (title: string) => {
      setProject(projectDetails[title]);
    },
    [project]
  );

  const renderProjects = useCallback(
    () =>
      projects.map((project) => (
        <Card key={`card-project-${project.cover}`} {...project} onClick={setCurrentProject} />
      )),
    []
  );

  const handleClear = useCallback(() => setProject(DEFAULT_PROJECT), []);

  return (
    <section ref={reference} className="h-fit">
      <Header bold bg={HeaderBG.Grey}>
        Project
      </Header>
      <div className="project-grid mt-12">{renderProjects()}</div>
      <Modal {...project} onClose={handleClear} />
    </section>
  );
};

export default memo(Projects);
