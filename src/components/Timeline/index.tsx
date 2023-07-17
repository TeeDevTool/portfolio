import React, { memo } from "react";
import Badge from "../Badge";
import Header, { HeaderBG } from "../Header";
import "./index.css";

const DEFAULT_END_DATE = "Present";

interface TimelineData {
  job: string;
  workplace: string;
  startYear: number;
  endYear?: number;
  active?: boolean;
  descriptions: string[];
  stacks: string[];
}

interface TimelineProps {
  datas: TimelineData[];
}

const Timeline: React.FC<TimelineProps> = ({ datas }) => {
  return (
    <div className="timeline-list w-full">
      {datas.map((data) => (
        <div className={`timeline ${data.active ? "active" : ""}`}>
          <div className="time-tablet">
            <div>{`${data.startYear} - ${data.endYear ?? DEFAULT_END_DATE}`}</div>
          </div>
          <div className="container">
            <div className="time-pc">
              <div>{`${data.startYear} - ${data.endYear ?? DEFAULT_END_DATE}`}</div>
            </div>
            <div className="content w-full">
              <div>
                <Header bg={HeaderBG.Light} bold>
                  {data.job}
                </Header>
                <span>{`At ${data.workplace}`}</span>
              </div>
              <span className="time-mobile">
                {`At ${data.workplace} | ${data.startYear} - ${data.endYear ?? DEFAULT_END_DATE}`}
              </span>
              <ul>
                {data.descriptions.map((description) => (
                  <li>
                    <div />
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <div className="skill-set">
                {data.stacks.map((stack) => (
                  <Badge>{stack}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Timeline);
