import { NavLink } from 'react-router-dom';
import './Aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faCode, faGamepad, fasv } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons'

function Aside(): JSX.Element {
  return (
    <div className="Aside">
      <NavLink to={'/new'}>
        <FontAwesomeIcon icon={faGamepad} />
        New
      </NavLink>
      <NavLink to={'/coding'}>
        <FontAwesomeIcon icon={faCode} />
        Coding
      </NavLink>
      <NavLink to={'/reactJs'}><FontAwesomeIcon icon={faAtom} />ReactJs</NavLink>
      <NavLink to={'/education'}>Education</NavLink>
      <NavLink to={'/podcasts'}>Podcasts</NavLink>
      <NavLink to={'/movies'}>Movies</NavLink>
      <NavLink to={'/gaming'}>Gaming</NavLink>
      <NavLink to={'/live'}>Live</NavLink>
      <NavLink to={'/sport'}>Sport</NavLink>
      <NavLink to={'/fashion'}>Fashion</NavLink>
      <NavLink to={'/beauty'}>Beauty</NavLink>
    </div>
  );
}

export default Aside;
