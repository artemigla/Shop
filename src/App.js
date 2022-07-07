import React from 'react';
import style from './styles/app.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { Header } from './components/header/Header';
import { Basket } from './pages/basket/Basket';
const App = () => {
  return (
    <div className={style}>
      <Router>
        <Header title={"Shop"} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
