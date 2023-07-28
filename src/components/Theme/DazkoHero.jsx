import React, { useState } from "react"
import styles from '../../styles/dazko/DazkoHero.module.css'
import Image from "next/image";
import Link from "next/link";

import { Carousel, Button, Tabs } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, RightOutlined } from "@ant-design/icons";


export default function DazkoHero() {
    const [isHamburger, setHamburger] = useState(false)
    const [position, setPosition] = useState("top")


    const carousellImg = [{
        header: "SHAPE YOUR PERFECT BODY",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button: "TAKE A TOUR NOW",
        img: "/img/dazko-img/bg_3.jpg.webp"
    },
    {
        header: "INCREASE YOUR MUSCLE POWER",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button: "TAKE A TOUR NOW",
        img: "/img/dazko-img/bg_2.jpg.webp"
    },
    {
        header: "YOU ONLY FAIL, WHEN YOU STOP TRYING",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button: "TAKE A TOUR NOW",
        img: "/img/dazko-img/bg_1.jpg.webp"
    },
    ]
    const tabs = ["HOME",
        "ABOUT",
        "TRAINERS",
        "CLASSES",
        "SCHEDULES",
        "NEWS",
        "CONTACT"
    ]

    return (
        <section className={`${styles.heroContainer} ${styles.dazkoHeroConatiner} dazkoHeroConatiner`}>

            {/* responsive */}

            <div className={styles.responsiveHeader}>
                <div>
                    <h3>DAZKO</h3>
                    <p>CROSSFIT & FITNESS</p>
                </div>
                <div className={styles.hamburger} onClick={() => {
                    setPosition('left')
                    setHamburger(!isHamburger)
                    console.log(isHamburger)
                }}>
                    <div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                    </div>
                    <div>MENU</div>
                </div>
            </div>
            <div className={styles.headerContent}>
                <div>Fee call <span>+1 234 456 78910</span></div>
                <div>
                    <div className={styles.socialSite}>
                        <Link href={"/"}> <TwitterOutlined /></Link>
                    </div>
                    <div className={styles.socialSite}>
                        <Link href={"/"}><FacebookOutlined /></Link>
                    </div>
                    <div className={styles.socialSite}>
                        <Link href={"/"}> <InstagramOutlined /></Link>
                    </div>

                </div>
            </div>
            <div className={`${styles.tabTopBorder} ${isHamburger ? styles.borderActive : styles.borderInActive}`}>

            </div>
            <div className={`${styles.tabContainer} tabContainer ${isHamburger ? styles.tabActive : styles.tabInActive}`}>
                <div className={styles.dazkoLogo}>DAZKO</div>

                <div >
                    <div>
                        <Tabs tabBarStyle={{ color: '#fff', fontWeight: '600', fontSize: '1.2rem' }}>
                            {tabs.map((tab, i) => {
                                return (

                                    <Tabs.TabPane key={i} tab={tab} />

                                )
                            })}

                        </Tabs>

                    </div>
                    <span className={styles.memberBtn}><Button>BECOME A MEMBER</Button><span className={styles.angledBorder}></span></span>
                </div>
            </div>


            <div className={`${styles.carouselContainer} carousel-container`}>
                <Carousel autoplay>
                    {carousellImg.map((carousel, i) => {
                        return (
                            <div key={i} className={styles.carousel_item_wrapper}>
                                <div className={styles.backgroundImg}>
                                    <img alt="" className={styles.bgImage} src={carousel.img} />
                                </div>
                                <div className={styles.heroDescriptionsBg}>
                                    <div className={styles.heroDescriptions}>
                                        <h1>{carousel.header}</h1>
                                        <p>{carousel.para}</p>
                                        <a >{carousel.button}<RightOutlined /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>


        </section>
    )
}