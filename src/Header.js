import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';

function Header() {
  return (
    <div className="header">
    
      <IconButton><PersonIcon fontSize="large" className="header__icon"/></IconButton>
      

      <img className="header__logo" src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png" alt="logo_img"></img>

      <IconButton><ForumIcon fontSize="large" className="header__icon"/> </IconButton>

      
    </div>
  );
}

export default Header;
