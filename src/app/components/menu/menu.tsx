"use client";

import { useState } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image'
import styles from './style.module.scss'
import meat from '../../../source/img/pizzas/meat.png'
import Tomato from '../../../source/img/pizzas/Tomato.png'
import Gribnaya from '../../../source/img/pizzas/Gribnaya.png'
import Italian_x2 from '../../../source/img/pizzas/Italian_x2.png'
import argentina from '../../../source/img/pizzas/argentina.png'
import cheese from '../../../source/img/pizzas/cheese.png'
import italian from '../../../source/img/pizzas/italian.png'
import venecia from '../../../source/img/pizzas/venecia.png'
import banner from '../../../source/img/pizzas/banner.png'
import PizzaItem from '../pizzaitem/pizzaitem';
export default function Menu() {
    const categories: string[] = ['Show All', 'Meat', 'Vegetarian', 'Sea products', 'Mushroom']

    class Pizza {
        name: string
        img: StaticImageData
        price: number

        constructor(name: string, img: StaticImageData, price: number) {
            this.name = name
            this.img = img
            this.price = price

        }
    }

    const pizzas: Pizza[] = [
        new Pizza('Meat', meat, 8.35),
        new Pizza('Tomato', Tomato, 7.35),
        new Pizza('Gribnaya', Gribnaya, 9.35),
        new Pizza('Italian x2', Italian_x2, 8.35),
    ]

    const mostpopularpizzas: Pizza[] = [
        new Pizza('Argentina', argentina, 7.35),
        new Pizza('Cheese', cheese, 6.35),
        new Pizza('Italian', italian, 7.35),
        new Pizza('Venecia', venecia, 8.35)
    ]


    const [selected, setselected] = useState<number>(0)
    return (
        <div className={styles.parent}>
            <p className={styles.bgmenu}>Menu</p>
            <p className={styles.bgmenu}>Menu</p>
            <p className={styles.bgmenu}>Menu</p>
            <h1>Menu</h1>
            <div className={styles.categories}>{categories.map((v, i) => (<button onClick={() => setselected(i)} key={i} className={i == selected ? styles.selected : ''}>{v}</button>))}</div>
            <div className={styles.pizzas}>{pizzas.map((v, i) => (
                <PizzaItem key={i} name={v.name} img={v.img} price={v.price} />
            ))}</div>
            <span className={styles.banner}>
                <h1>Most Popular Pizza</h1>
                <Image src={banner} alt="" />
            </span>
            <div className={styles.pizzas}>{mostpopularpizzas.map((v, i) => (
                <PizzaItem key={i} name={v.name} img={v.img} price={v.price} />
            ))}</div>
        </div>
    )
}