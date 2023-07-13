import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

function About() {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="problem with image loading"
        fill={true}
        className={styles.image}
      />
    </div>
    
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quae dolor, optio voluptatibus magnam iure esse
          <br />
          <br />
           tempora beatae. A
          suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
          eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
          beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          <br />
          <br />
          voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
          esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
          officiis voluptatum quo ea eveniet?
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
          suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
          eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
          Creative Illustrations
          <br />
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
        </p>
        <Button text="Contact" url="/contact" />
      </div>
    </div>
  </div>
  )
}

export default About