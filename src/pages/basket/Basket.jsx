import React from 'react';
import style from './styles/style.module.scss';
import LogoSvg from '../../assets/svg/shopping-cart.svg';

export const Basket = () => {
    return (
        <main className={style.container}>
            <div className={style.emptyBasket}>
                <img src={LogoSvg} alt="" className={style.logo} />
            </div>
            <div>
                <h3 className={style.title}>There is nothing in the cart.</h3>
            </div>
        </main>
    )
}