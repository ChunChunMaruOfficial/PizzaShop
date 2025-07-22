"use client";

import { useState } from 'react';
import styles from './style.module.scss'
import meat from '../../../source/img/pizzas/meat.png'
import Tomato from '../../../source/img/pizzas/Tomato.png'
import Gribnaya from '../../../source/img/pizzas/Gribnaya.png'
import Italian_x2 from '../../../source/img/pizzas/Italian_x2.png'
import argentina from '../../../source/img/pizzas/argentina.png'
import cheese from '../../../source/img/pizzas/cheese.png'
import italian from '../../../source/img/pizzas/italian.png'
import venecia from '../../../source/img/pizzas/venecia.png'


export default function Menu() {
    const categories:string[] = ['Show All', 'Meat', 'Vegetarian', 'Sea products', 'Mushroom'] 
    const pizzas
    const [selected, setselected] = useState<number>(0)
    return (
        <div className={styles.parent}>
            <h1>Menu</h1>
            <div className={styles.categories}>{categories.map((v,i) => (<button onClick={() => setselected(i)} key={i} className={ i == selected ? styles.selected : ''}>{v}</button>)) }</div>
        </div>
    )
}