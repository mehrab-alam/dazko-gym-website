import React from "react";
// import Image from

import styles from "../../styles/dazko/DazkoFooter.module.css";
import { BookOutlined, SendOutlined, PhoneOutlined, ArrowRightOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Image = dynamic(() => import("next/image"));

const DazkoFooter = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 5500) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const explores = ["About Us", "Trainers Team", "Awesome Classes", "Pricing Packages", "Latest News"];
  const contacts = [
    {
      icon: <BookOutlined />,
      detail: "Torqbit, memco road, Dhanbad, Jharkhand, India",
    },
    {
      icon: <PhoneOutlined />,
      detail: "+2 392 3929 210",
    },
    {
      icon: <SendOutlined />,
      detail: "	info@yourdomain.com  ",
    },
  ];
  const images = [
    "/img/dazko-img/gallery-1.jpg.webp",
    "/img/dazko-img/gallery-2.jpg.webp",
    "/img/dazko-img/gallery-3.jpg.webp",
    "/img/dazko-img/gallery-4.jpg.webp",
    "/img/dazko-img/gallery-5.jpg",
    "/img/dazko-img/gallery-6.jpg.webp",
    "/img/dazko-img/gallery-7.jpg.webp",
    "/img/dazko-img/gallery-8.jpg.webp",
  ];
  return (
    <section className={styles.footerSectionContainer}>
      <div className={styles.footerSection}>
        <div>
          <img src='/img/dazko-img/sak gym-log.png' alt='' height={100} width={"auto"} />
          {/* <h4>DAZKO</h4>
          <div>CROSSFIT & FITNESS</div> */}
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className={styles.exploreContainer}>
          <h4>Explore</h4>
          <div>
            {explores.map((explore, i) => {
              return (
                <div key={i}>
                  <ArrowRightOutlined />
                  {explore}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4>Our Contacts</h4>
          <div>
            {contacts.map((contact, i) => {
              return (
                <div key={i}>
                  <span>{contact.icon}</span>
                  {contact.detail}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {shown &&
            images.map((img, i) => {
              return <Image key={i} src={img} alt='' height={80} width={500} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default DazkoFooter;
