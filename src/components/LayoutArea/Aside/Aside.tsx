import {
  faAtom,
  faBasketball,
  faCode,
  faFilm,
  faGamepad,
  faGraduationCap,
  faPodcast,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Aside.css";

function Aside({ setPageName }: { setPageName: (val:string)=>void }): JSX.Element {
  const pageHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement;
    setPageName(target.value);
  };

  return (
    <div className="Aside">
      <button onClick={pageHandler} value="new">
        <FontAwesomeIcon icon={faGamepad} />
        &ensp; New
      </button>
      <button onClick={pageHandler} value="coding">
        <FontAwesomeIcon icon={faCode} />
        &ensp; Coding
      </button>
      <button onClick={pageHandler} value="reactJs">
        <FontAwesomeIcon icon={faAtom} />
        &ensp; ReactJs
      </button>
      <button onClick={pageHandler} value="education">
        <FontAwesomeIcon icon={faGraduationCap} />
        &ensp; Education
      </button>
      <button onClick={pageHandler} value="podcast">
        <FontAwesomeIcon icon={faPodcast} />
        &ensp; Podcasts
      </button>
      <button onClick={pageHandler} value="movies">
        <FontAwesomeIcon icon={faFilm} />
        &ensp; Movies
      </button>
      <button onClick={pageHandler} value="gaming">
        <FontAwesomeIcon icon={faGamepad} />
        &ensp; Gaming
      </button>
      <button onClick={pageHandler} value="sport">
        <FontAwesomeIcon icon={faBasketball} />
        &ensp; Sport
      </button>
      <button onClick={pageHandler} value="fashion">
        <FontAwesomeIcon icon={faShirt} />
        &ensp; Fashion
      </button>
    </div>
  );
}

export default Aside;
