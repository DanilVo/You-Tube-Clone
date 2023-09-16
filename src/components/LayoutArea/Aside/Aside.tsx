import {
  faAtom,
  faBasketball,
  faCode,
  faFilm,
  faGamepad,
  faGraduationCap,
  faPodcast,
  faRefresh,
  faShirt,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../../UiComponents/ButtonComponent/ButtonComponent';
import './Aside.css';

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
      <NavLink to={'/'}>
        <ButtonComponent
          onClick={pageHandler}
          value="New"
          text="New"
          icon={faRefresh}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Coding"
          text="Coding"
          icon={faCode}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="React"
          text="React"
          icon={faAtom}
        />
      </NavLink>

      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Education"
          text="Education"
          icon={faGraduationCap}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Podcast"
          text="Podcast"
          icon={faPodcast}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Gaming"
          text="Gaming"
          icon={faGamepad}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Movies"
          text="Movies"
          icon={faFilm}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Sports"
          text="Sports"
          icon={faBasketball}
        />
      </NavLink>
      <NavLink to={'/'}>
      <ButtonComponent
          onClick={pageHandler}
          value="Fashion"
          text="Fashion"
          icon={faShirt}
        />
      </NavLink>
    </div>
  );
}

export default Aside;
