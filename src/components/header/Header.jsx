import React from 'react';
import style from './styles/style.module.scss'
import { Navigation } from '../route/Navigation';

export const Header = ({ title }) => {
    return (
        <header className={style.header}>
            <div className={style.leftContent}>
                <h3 className={style.logo}>{title}</h3>
                <Navigation />
            </div>
            <div className={style.centerContent}></div>
            <div className={style.rightContent}>
            </div>
        </header>
    )
}