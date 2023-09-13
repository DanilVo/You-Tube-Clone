import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./ButtonComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onClick: () => void;
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
