import React, { useState } from 'react';
import Image from 'next/image'

import styles from '../../styles/dazko/DazkoTrainer.module.css'

const DazkoTrainer = () => {
    const [isActive1, setActive1] = useState(false)
    const [isActive2, setActive2] = useState(false)
    const [isActive3, setActive3] = useState(false)
    const [isActive4, setActive4] = useState(false)

    const imageHover = (key) => {
        if (key == 0) {
            setActive1(true)
        } else if (key == 1) {
            setActive2(true)
        }
        else if (key == 2) {
            setActive3(true)
        }
        else if (key == 3) {
            setActive4(true)
        }
        console.log(key)
    }
    const onMouseLeave = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        console.log(isActive1)
        setActive4(false)

    }

    const trainer = [{
        img: "/img/dazko-img/trainer-1.png.webp",
        active: isActive1,
        name: 'ARON MIGHTY'
    },
    {
        img: "/img/dazko-img/trainer-2.png.webp",
        active: isActive2,
        name: "ALICIA BROWN"
    },
    {
        img: "/img/dazko-img/trainer-3.png.webp",
        active: isActive3,
        name: "ANNE HENDERSON"
    },
    {
        img: "/img/dazko-img/trainer-4.png.webp",
        active: isActive4,
        name: "BRUCE GRAPLER"
    },]
    return (
        <section className={styles.fitnessTrainerSection}>
            <h4>TRAINER</h4>
            <h1>FITNESS <span>TRAINER</span></h1>
            <div className={styles.trainersProfile}>
                <Image src="/img/dazko-img/bg_5.jpg.webp" alt="" height={600} width={1200} />
                <div className={styles.trainerImg}>
                    {trainer.map((trainerImg, i) => {
                        return (
                            <div key={i}>
                                <Image alt="" height={400} width={1200} src={trainerImg.img} className={trainerImg.active ? `${styles.imgActive}` : `${styles.imgInActive}`} onMouseOver={() => {
                                    imageHover(i)
                                }} onMouseLeave={onMouseLeave} />
                                <div className={`${styles.trainerNames} ${trainerImg.active ? `${styles.nameActive}` : `${styles.nameInActive}`} `}>
                                    <h3>{trainerImg.name}</h3><span></span>
                                </div>

                            </div>)
                    })}
                </div>
            </div>


        </section>
    )
}

export default DazkoTrainer