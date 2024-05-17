import React, { memo } from "react";
import Header, { HeaderBG } from "@app/components/Header";
import Timeline from "@app/components/Timeline";
import { Skills } from "@app/common/enum";

interface ExperienceProps {
  reference: React.MutableRefObject<HTMLElement | null>;
}

const experience = [
  {
    job: "Sr. Frontend Developer",
    workplace: "Seven Peaks",
    startYear: 2023,
    active: true,
    descriptions: [
      "Develop and maintain responsive web applications using Next.js and Typescript",
      "Using react related 3rd library integrate with web applications to enhance maintainability and ensure consistency with industry standards such as React- hook-form, React-query",
      "Applying modern CSS frameworks to web application such as Material UI and TailwindCSS",
      "Write clean, modular, and reusable code following best practices and coding standards",
      "Optimize web applications for maximum speed and scalability",
    ],
    stacks: [
      Skills.React,
      Skills.NextJS,
      Skills.ReactHookForm,
      Skills.ReactQuery,
      Skills.Typescript,
      Skills.CSS,
      Skills.Tailwind,
      Skills.MUI,
      Skills.Nodejs,
      Skills.PostgreSQL,
      Skills.Prisma,
      Skills.TRPC,
      Skills.Zod,
    ],
  },
  {
    job: "Frontend Developer",
    workplace: "Refinitiv",
    startYear: 2022,
    endYear: 2023,
    descriptions: [
      "Develop and maintain responsive web applications using ReactJS and Typescript",
      "Review colleagues code to verify the correctness of logic and check for typos and also Providing consultation and solutions to colleagues for resolving problems",
      "Design and implement unit tests to validate functionality, performance, and reliability of software systems",
      "Create comprehensive documentation and deliver presentations to showcase latest developed features in each sprint",
    ],
    stacks: [
      Skills.React,
      Skills.Redux,
      Skills.Typescript,
      Skills.CSS,
      Skills.Jest,
      Skills.Jenkins,
    ],
  },
  {
    job: "Fullstack Developer",
    workplace: "Klickerlab",
    startYear: 2022,
    endYear: 2022,
    descriptions: [
      "Develop and maintain responsive web applications using ReactJS",
      "Design and create reusable component or custom hooks for long term use",
      "Develop and maintain server-side applications and APIs using Node.js",
      "Design and implement efficient and scalable database structures and optimize database queries for optimal performance",
      "Implement Google Analytics 4 tracking and measurement solutions to gather insights and analyze user behavior",
    ],
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
    ],
  },
  {
    job: "Web Developer",
    workplace: "CSLoxinfo",
    startYear: 2019,
    endYear: 2022,
    descriptions: [
      "Develop and maintain responsive web applications using ReactJS",
      "Develop and maintain server-side applications and APIs using PHP Laravel",
      "Applying CSS frameworks such as Material UI and Bootstrap to enhance the visual design of websites",
      "Converting UI designs into HTML code",
      "Designing and planning for manual debugging and testing of websites",
    ],
    stacks: [Skills.React, Skills.Redux, Skills.MUI, Skills.PHP, Skills.Laravel, Skills.PostgreSQL],
  },
];

const Experience: React.FC<ExperienceProps> = ({ reference }) => {
  return (
    <section ref={reference} className="h-auto">
      <Header bold bg={HeaderBG.Dark}>
        Experience
      </Header>
      <div>
        <Timeline datas={experience} />
      </div>
    </section>
  );
};

export default memo(Experience);
