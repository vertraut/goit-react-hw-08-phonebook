import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
