import React, { useState } from 'react';
import { Menu } from '../../components/api/Menu';
import style from './styles/style.module.scss';
export const Shop = () => {
    const [menu, setMenu] = useState(Menu);


    return (
        <main className={style.container}>
            <div></div>
            <div className={style.wrapper}>
                {menu.map(({ id, title, img, description, price }) => (
                    <div key={id} className={style.carts}>
                        <img src={img} alt="" className={style.image} />
                        <h3>{title}</h3>
                        <i>{description}</i>
                        <h5>{price}</h5>
                    </div>
                ))}
            </div>
        </main>
    )
}