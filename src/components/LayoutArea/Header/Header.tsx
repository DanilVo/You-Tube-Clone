import { NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

function Header(): JSX.Element {
  const [seachValue, setSearchValue] = useState('')
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {target} = event
    setSearchValue(target.value)
  }
  
  return (
    <div className="Header">
      <NavLink to={'/'}>
        <svg
          color="white"
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.384V7.616c0-.662-.435-1.245-1.078-1.406C19.184 5.774 15.592 5 12 5c-3.592 0-7.184.774-8.922 1.21A1.436 1.436 0 0 0 2 7.616v8.768c0 .662.435 1.245 1.078 1.406C4.816 18.226 8.408 19 12 19c3.592 0 7.184-.774 8.922-1.21A1.436 1.436 0 0 0 22 16.384Z"></path>
          <path d="M11.287 14.949a.5.5 0 0 1-.787-.41V9.46a.5.5 0 0 1 .787-.409l3.628 2.54a.5.5 0 0 1 0 .82l-3.628 2.539Z"></path>
        </svg>
        YouTobe
      </NavLink>
      <section>
        <input placeholder="Search" onChange={handleChange}/>
        <NavLink to={`/search/${seachValue}`}>Search</NavLink>
      </section>
    </div>
  );
}

export default Header;
