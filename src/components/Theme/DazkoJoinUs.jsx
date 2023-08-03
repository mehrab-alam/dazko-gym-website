import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Image = dynamic(() => import("next/image"));

import styles from "../../styles/dazko/DazkoJoinUs.module.css";

const DazkoJoinUs = () => {
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
  const joinUs = [
    {
      img: "/img/dazko-img/001-fitness.svg",
      head: "FREE FITNESS TRAINING ",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      img: "/img/dazko-img/002-treadmill.svg",
      head: "TONS OF CARDIO & STRENGTH",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      img: "/img/dazko-img/003-vip-card.svg",
      head: "NO COMMENTMENT MEMBERSHIPS",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];
  return (
    <section className={styles.dazkoJoinUsSections}>
      <h4>JOIN US NOW</h4>

      <h1>
        JOIN US OUR FREE WORKOUT TRAINING WITH <span> DAZKO</span>
      </h1>

      <div className={styles.joinUsFeatures}>
        {joinUs.map((join, i) => {
          return (
            <div key={i}>
              {shown && <Image src={join.img} alt='' height={80} width={100} />}
              <h3>{join.head}</h3>
              <p>{join.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DazkoJoinUs;
