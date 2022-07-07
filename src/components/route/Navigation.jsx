import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/style.module.scss';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <Link className={style.link} to={'/'}><FaHome size={25} /></Link>
            <Link className={style.link} to={'/basket'}><FaShoppingCart size={25} /></Link>
        </div>
    )
}