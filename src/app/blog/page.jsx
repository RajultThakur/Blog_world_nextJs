import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = async () => {
  // const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {/* {data.map((item) => ( */}
        <Link href={`/blog/1`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={350}
              height={210}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Web development made easy with us</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum distinctio veritatis non molestiae iste, sunt, tempora nostrum voluptatum, natus cumque consequatur nemo ipsa quod est velit animi eligendi sint!
            </p>
          </div>
        </Link>
        <Link href={`/blog/1`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={350}
              height={210}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Web development made easy with us</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum distinctio veritatis non molestiae iste, sunt, tempora nostrum voluptatum, natus cumque consequatur nemo ipsa quod est velit animi eligendi sint!
            </p>
          </div>
        </Link>
        <Link href={`/blog/1`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={350}
              height={210}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Web development made easy with us</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum distinctio veritatis non molestiae iste, sunt, tempora nostrum voluptatum, natus cumque consequatur nemo ipsa quod est velit animi eligendi sint!
            </p>
          </div>
        </Link>
      {/* ))} */}
    </div>
  );
};

export default Blog;