import React from "react"
import Image from 'next/image'

import styles from '../../styles/dazko/DazkoPricing.module.css'
import { Button, } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const DazkoPricing = () => {
    const pricingDetail = [{
        plans: "BASIC PLAN",
        price: "49",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    },
    {
        plans: "BEGINNER PLAN",
        price: "79",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    }, {
        plans: "PREMIUM PLAN",
        price: "109",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    }, {
        plans: "ULTIMATE PLAN",
        price: "149",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    },]

    const features = [
        {
            img: "/img/dazko-img/pro-icon-1.png",
            head: "THOUSANDS OF EQUIPMENTS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. "
        },
        {
            img: "/img/dazko-img/pro-icon-2.png",
            head: "OPEN 24/7 DAZKO GYM FITNESS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia."

        },
        {
            img: "/img/dazko-img/pro-icon-3.png",
            head: " FOOD SUPPLEMENTS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.."

        },
    ]
    return (
        <section className={styles.pricingSection}>
            <h4>OUR PRICING</h4>
            <h1>PRICING & <span>PACKAGES</span></h1>
            <div className={styles.priceingDetailes}>
                {pricingDetail.map((price, i) => {
                    return (
                        <div key={i}>
                            <h4>{price.plans} </h4>
                            <h2><span>$</span>{price.price}</h2>
                            {price.training.map((train, i) => {
                                return (
                                    <div key={i} className={styles.trainingDetails}>
                                        <span> <ArrowRightOutlined /> </span>   {train}
                                    </div>
                                )
                            })}
                            <div className={styles.pricing_btn}>
                                <Button>GET STARTED</Button></div>
                        </div>
                    )
                })}

            </div>
            <div className={styles.featureWrapper}>
                <div className={styles.featureContainer}>
                    {features.map((feature, i) => {
                        return (
                            <div className={styles.features} key={i}>
                                <Image src={feature.img} alt="" height={50} width={50} />
                                <div className={styles.featureDescriptions}>

                                    <h2>{feature.head} </h2>
                                    <p>{feature.para} </p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default DazkoPricing