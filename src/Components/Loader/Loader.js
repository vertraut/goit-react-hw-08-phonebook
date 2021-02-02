import React from 'react';
import Spinner from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.spinner}>
      <Spinner type="Puff" color="#007179" height={300} width={300} />
    </div>
  );
}
