import styles from "../../styles/dazko/DazkoAbout.module.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
const DazkoAbout = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 250) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const features = ["MEN FITNESS AND WORKOUT", "WOMEN FITNESS AND WORKOUT", "PERSONAL TRAININGS"];
  const experiences = [
    {
      num: "30+",
      para: "YEARS OF EXPERIENCED",
    },
    {
      num: "100+",
      para: "FITNESS TRAINERS",
    },
    {
      num: "310+",
      para: "BEST EQUIPMENTS",
    },
    {
      num: "10K+",
      para: "SATISFIED CLIENTS",
    },
  ];
  return (
    <section className={`${styles.aboutSection} about-container`}>
      <div className={styles.aboutContainer}>
        <div>{shown && <Image src='/img/dazko-img/about.png.webp' alt='' width={450} height={100} />}</div>
        <div>
          <h4>INFORMATION ABOUT US</h4>
          <h1>
            DAZKO A<span> CROSSFIT </span> WORKOUT <br /> TRAINING CENTER
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>

          {features.map((feature, i) => {
            return (
              <div key={i}>
                <span>
                  <ArrowRightOutlined />
                </span>{" "}
                <Link href='/' key={i}>
                  {feature}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.experienceContainer}>
        <div></div>
        {experiences.map((exp, i) => {
          return (
            <div className={styles.experienceText} key={i}>
              <h1>{exp.num}</h1>
              <p>{exp.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default DazkoAbout;
