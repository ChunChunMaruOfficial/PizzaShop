"use client";

import styles from './style.module.scss'
import videoimg from '../../../source/img/video.png'
import mainpizza from '../../../source/img/mainpizza.png'
import fried from '../../../source/img/fried.png'
import minipizzo from '../../../source/img/pizzo.png'
import Image from 'next/image'
import { useState } from 'react'


export default function Main() {
const [mainselected, setmainselected] = useState<number>(0) 
    return (
        <div className={styles.parent}>
            <p className={styles.bgpizza}>Pizza</p>
            <p className={styles.bgpizza}>Pizza</p>
            <p className={styles.bgpizza}>Pizza</p>
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
                            <div className={mainselected == 0 ? styles.activeslider : (mainselected == 1 ? (styles.activeslider + " " + styles.toorder) : (styles.activeslider + " " + styles.menu))}></div>
                            <span>
                                <h3 onClick={() => setmainselected(1)} className={mainselected == 2 ? styles.selected : '' }>To order</h3>
                                <h3 onClick={() => setmainselected(2)} className={mainselected == 1 ? styles.selected : '' }>Pizza-Menu</h3>
                            </span>
                        </div>
                    </div>
                </span>
            </div>
            <div className={styles.right}>
                 <Image className={styles.bigpizza} width={500} height={750} src={mainpizza} alt="" />
                 <Image className={styles.fried} width={260} height={275} src={fried} alt="" />
                 <Image className={styles.minipizzo} width={300} height={300} src={minipizzo} alt="" />
            </div>
        </div>
    )
}