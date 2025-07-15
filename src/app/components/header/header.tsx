"use client";

import { useState } from 'react'
import styles from './style.module.scss'
import bag from '../../../source/bag.svg'
import Image from "next/image";


export default function Header() {

    const headerarray = ['Home', 'Menu', 'Events', 'About us']
    const [selectedpoint, setselectedpoint] = useState<number>(0)

    return (
        <header className={styles.header}>
            <h1>pizzashop</h1>
            <div className={styles.headerarray}>
                {headerarray.map((v, i) => (<p className={selectedpoint == i ? styles.selectedpoint : ''} onClick={() => setselectedpoint(i)}>{v}</p>))}
            </div>
            <span>
                <button>Log in</button>
                <button><Image alt='bag' height={27} width={28} src={bag}/></button>
            </span>
        </header>
    )
}