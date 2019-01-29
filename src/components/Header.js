import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        스트림
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          현재 스트림
        </Link>
				<GoogleAuth/>
      </div>
    </div>
  );
};

export default Header;
