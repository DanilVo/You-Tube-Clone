import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonComponent.css";

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
  value: string;
  text: string;
  icon: IconDefinition;
}

const ButtonComponent: React.FC<Props> = ({ onClick, value, text, icon }) => {
  return (
    <button className="ButtonComponent" onClick={onClick} value={value}>
      <FontAwesomeIcon icon={icon} />
      &ensp; {text}
    </button>
  );
};

export default ButtonComponent;
