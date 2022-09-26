import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css'

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
  <a className="navbar-brand" href='local'>
    <img id={s.logoHenry} src={Logo} width="30" height="30" className="d-inline-block align-top mr-4" alt="Logo" />
    Henry - Wheater App
  </a>
  <div>
    <SearchBar
    className="form-inline my-2 my-lg-0"
          onSearch={onSearch}
        />
    </div>  
</nav>
  );
};



export default Nav;
