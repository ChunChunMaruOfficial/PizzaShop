import { StaticImageData } from "next/image"
import Image from "next/image";
import styles from './style.module.scss'

export default function PizzaItem(v: { name: string, img: StaticImageData, price: number }) {
    return (
        <div className={styles.PizzaItem}>
            <div className={styles.background}></div>
            <Image width={200} height={200} src={v.img} alt="" />
            <h2>{v.name}</h2>
            <p>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
            <span>{[22, 28, 33].map(v1 => (<p>{v1}</p>))}</span>
            <button className={styles.Ingridients}>+ Ingridients</button>
            <div>
                <p><sup>$</sup>{v.price}</p>
                <span><button>-</button><p>1</p><button>+</button></span>
            </div>
            <button className={styles.Order}>Order Now</button>
        </div>
    )
}