import React from 'react';
import style from './styles/app.module.scss';
import { Shop } from './pages/shop/Shop';
const App = () => {
  return (
    <div className={style}>
      <Shop />
    </div>
  );
}

export default App;
