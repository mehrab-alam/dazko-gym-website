import React from "react"
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/dazko/DazkoStories.module.css'
import { PlayCircleOutlined } from "@ant-design/icons";

const DazkoStories = () => {
    return (
        <section className={styles.storiesContainer}>
            <h4>WATCH OUR STORIES</h4>
            <h1>MEMBERS SUCCESS <span>STORIES</span></h1>

            <div className={styles.videoContainer}>
                <div>
                    <Image src="/img/dazko-img/success-1.jpg.webp" alt="" height={400} width={1200} />
                    <div className={styles.videoDescrip}>
                        <Link href="htttps://vimeo.com/115041822"><PlayCircleOutlined /></Link>
                        <div>From 264 lbs to 154 lbs, A Great transformation in my life.</div>
                    </div>
                </div>
                <div>
                    <Image src="/img/dazko-img/success-2.jpg.webp" alt="" height={400} width={1200} />
                    <div className={styles.videoDescrip}>
                        <Link href="htttps://vimeo.com/115041822"><PlayCircleOutlined /></Link>
                        <div>From 264 lbs to 154 lbs, A Great transformation in my life.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DazkoStories;