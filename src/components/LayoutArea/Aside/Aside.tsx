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
import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside({
  setPageName,
}: {
  setPageName: (val: string) => any;
}): JSX.Element {
  const pageHandler = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLInputElement;
    setPageName(target.value);
  };

  return (
    <div className="Aside">
      <NavLink to={"/"}>
        {/* <ButtonComponent
          onClick={pageHandler}
          value="New"
          text="New"
          icon={faGamepad}
        /> */}
        <button onClick={pageHandler} value="New">
          <FontAwesomeIcon icon={faGamepad} />
          &ensp; New
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Coding">
          <FontAwesomeIcon icon={faCode} />
          &ensp; Coding
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="ReactJs">
          <FontAwesomeIcon icon={faAtom} />
          &ensp; ReactJs
        </button>
      </NavLink>

      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Education">
          <FontAwesomeIcon icon={faGraduationCap} />
          &ensp; Education
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Podcast">
          <FontAwesomeIcon icon={faPodcast} />
          &ensp; Podcasts
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Movies">
          <FontAwesomeIcon icon={faFilm} />
          &ensp; Movies
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Gaming">
          <FontAwesomeIcon icon={faGamepad} />
          &ensp; Gaming
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Sport">
          <FontAwesomeIcon icon={faBasketball} />
          &ensp; Sport
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button onClick={pageHandler} value="Fashion">
          <FontAwesomeIcon icon={faShirt} />
          &ensp; Fashion
        </button>
      </NavLink>
    </div>
  );
}

export default Aside;
