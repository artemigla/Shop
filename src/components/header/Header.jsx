import React from 'react';
import style from './styles/style.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.leftContent}>
                <h3 className={style.logo}>Shop</h3>
            </div>
            <div className={style.centerContent}></div>
            <div className={style.rightContent}>

            </div>
        </header>
    )
}