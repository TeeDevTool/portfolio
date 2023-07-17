import OpenIcon from "@app/asset/icons/open";

interface NavButtonProps {
  url?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ url }) => {
  const title = url ? "Live demo" : "Demo not available";
  return (
    <a href={url || "#"} target="_blank" className={`nav-button ${!url && "disabled"}`}>
      <span>{title}</span>
      <OpenIcon />
    </a>
  );
};

export default NavButton;
