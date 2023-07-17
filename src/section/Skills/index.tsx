import React, { useCallback, useMemo, memo } from "react";
import Header, { HeaderBG } from "@app/components/Header";
import Table, { CellType, TableRow } from "@app/components/Table";
import { Proficiency, Skills as S } from "@app/common/enum";

interface SkillsProps {}

interface TableWrapperProps {
  title: string;
  datas: TableRow[];
}

const DEFAULT_HEADER = [
  { value: "Stack", type: CellType.Header },
  { value: "Proficiency", type: CellType.Header },
  { value: "Related Stacks", type: CellType.Header },
];

const frontends = [
  [...DEFAULT_HEADER],
  [
    { value: S.React, type: CellType.Cell },
    { value: Proficiency.Expert, type: CellType.Cell },
    {
      value: `${S.NextJS} | ${S.Redux} | ${S.ReactQuery} | ${S.ReactHookForm}`,
      type: CellType.Cell,
    },
  ],
  [
    { value: S.CSS, type: CellType.Cell },
    { value: Proficiency.Advance, type: CellType.Cell },
    {
      value: `${S.MUI} | ${S.Tailwind} | ${S.StyledComponents} | ${S.HeadlessUI}`,
      type: CellType.Cell,
    },
  ],
  [
    { value: S.Typescript, type: CellType.Cell },
    { value: Proficiency.Advance, type: CellType.Cell },
    { value: "", type: CellType.Cell },
  ],
];

const backends = [
  [...DEFAULT_HEADER],
  [
    { value: S.Nodejs, type: CellType.Cell },
    { value: Proficiency.Advance, type: CellType.Cell },
    { value: S.GraphQL, type: CellType.Cell },
  ],
  [
    { value: S.PHP, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: S.Laravel, type: CellType.Cell },
  ],
  [
    { value: S.Python, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: "", type: CellType.Cell },
  ],
  [
    { value: S.Java, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: "", type: CellType.Cell },
  ],
];

const others = [
  [...DEFAULT_HEADER],
  [
    { value: S.Test, type: CellType.Cell },
    { value: Proficiency.Advance, type: CellType.Cell },
    { value: `${S.Jest} | ${S.Cypress}`, type: CellType.Cell },
  ],
  [
    { value: S.CICD, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: `${S.Docker} | ${S.Jenkins}`, type: CellType.Cell },
  ],
  [
    { value: S.SQL, type: CellType.Cell },
    { value: Proficiency.Intermediate, type: CellType.Cell },
    { value: `${S.MySQL} | ${S.PostgreSQL}`, type: CellType.Cell },
  ],
  [
    { value: S.NoSQL, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: S.MongoDB, type: CellType.Cell },
  ],
  [
    { value: S.GA4, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: "", type: CellType.Cell },
  ],
  [
    { value: S.R, type: CellType.Cell },
    { value: Proficiency.Beginner, type: CellType.Cell },
    { value: "", type: CellType.Cell },
  ],
];

const TableWrapper: React.FC<TableWrapperProps> = ({ title, datas }) => {
  return (
    <div className="mt-12">
      <Header bold bottom={8}>
        {title}
      </Header>
      <div>
        <Table component={title} rows={datas} />
      </div>
    </div>
  );
};

const TableWrapperMemo = memo(TableWrapper);

const Skills: React.FC<SkillsProps> = () => {
  const tables = useMemo(
    () => [
      { title: S.Frontend, datas: frontends },
      { title: S.Backend, datas: backends },
      { title: S.Other, datas: others },
    ],
    []
  );

  const renderTables = useCallback(
    () =>
      tables.map((table, index) => (
        <TableWrapperMemo key={`table-wrapper-${index}`} title={table.title} datas={table.datas} />
      )),
    [tables]
  );

  return (
    <section className="h-fit">
      <Header bold bg={HeaderBG.Dark}>
        skills
      </Header>
      {renderTables()}
    </section>
  );
};

export default memo(Skills);
