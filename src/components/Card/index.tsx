import Image from "next/image";
import { memo } from "react";

interface CardProps {
  title: string;
  description: string;
  cover: string;
  workplace: string;
  onClick?: (title: string) => void;
}

const PROJECT_ROOT = "/images/projects/";

const Card: React.FC<CardProps> = ({
  title,
  description,
  cover,
  workplace,
  onClick = () => {},
}) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <div onClick={handleClick} className="card clickable">
      <div className="cover">
        <Image src={`${PROJECT_ROOT}${cover}.jpg`} alt={cover} width={500} height={500} />
        <h4>{workplace}</h4>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default memo(Card);
