import React from 'react';

import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={s.appbar}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </div>
  );
}
