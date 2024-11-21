import React from 'react';
import s from "./Header.module.scss"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className={s.header}>
          <div className="container">
             <div className={s.content}>
                <Link to = "/">Menu</Link>
                <Link to = "/order">Order</Link>
                <Link to = "/admin">Admin</Link>
              </div>
          </div>
        </div>
    );
};

export default Header;