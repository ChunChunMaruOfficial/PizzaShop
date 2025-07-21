"use client";

import styles from './style.module.scss'
import videoimg from '../../../source/img/video.png'
import Image from 'next/image'
import { useState } from 'react'


export default function Main() {
const [mainselected, setmainselected] = useState<boolean>(true)
    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                <h1>The Fastest Pizza⚡Delivery</h1>
                <p>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span>pizza is free!</span></p>
                <span className={styles.Cookingprocess}>
                    <p>Cooking process:</p>
                    <Image width={272} height={194} src={videoimg} alt="" />
                </span>
                <span className={styles.slide}>
                    <div className={styles.backgroundslider}>
                        <div className={styles.middleslider}>
                            <div className={styles.activeslider}></div>
                            <span>
                                <h3 className={!mainselected ? styles.selected : '' }>To order</h3>
                                <h3 onClick={() => setmainselected(false)} className={mainselected ? styles.selected : '' }>Pizza-Menu</h3>
                            </span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}