import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = async ({ params }) => {
//   const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Web development made easy with us</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, voluptas accusamus? Fugiat modi, vitae laboriosam nulla possimus perferendis in illo vero eligendi quae aliquid? In provident ratione, aliquam, exercitationem dolores ullam.   
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Rj Thakur</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad, blanditiis eaque asperiores similique iste minima. Cumque non error nam incidunt tenetur omnis a hic dignissimos enim. Iusto molestias, sequi incidunt adipisci cupiditate obcaecati veritatis minus deleniti eveniet repudiandae temporibus odit natus. Porro perferendis repellat natus explicabo voluptatibus iste, dicta hic aliquam earum voluptatem. Incidunt ullam eligendi, ad in repellendus eaque pariatur accusantium, deserunt similique quisquam voluptate quaerat corrupti exercitationem reiciendis tenetur blanditiis qui. Est, ullam quod esse non consectetur recusandae, dolor tenetur ratione mollitia quam nemo maxime maiores, deleniti facere minus obcaecati commodi corporis molestias quos amet cum sunt? Alias optio aliquid eos, dicta ipsum beatae nulla, rem libero consequatur nemo atque amet porro, corporis sed dolorum molestias. Porro sit deleniti voluptatum repudiandae vero? Temporibus laborum perferendis deserunt doloribus fugit ipsam quisquam repellat dolor beatae exercitationem odit illo et est, rem hic, ad at sed libero laboriosam. Cupiditate, ipsa magnam, unde, minima quod vel veniam maxime nostrum reiciendis corrupti fugiat ab quaerat excepturi consectetur sint magni quo adipisci nulla aliquid suscipit perspiciatis distinctio libero temporibus quae. Ipsam, qui aut. Nisi recusandae aut debitis aliquid libero ipsa itaque beatae, animi aspernatur vitae, reiciendis dignissimos, culpa eveniet! Error placeat voluptas quibusdam! Est nulla laborum cupiditate consequuntur praesentium consectetur rem recusandae dolores quaerat, quae dolorem atque maxime, non optio qui iste minus. Qui reiciendis nihil ipsa nostrum cum. Ipsum ea voluptatum praesentium dolor quod repellat odit ex earum provident voluptate voluptatem sapiente, et delectus odio perspiciatis corrupti perferendis cupiditate ut dolorum assumenda corporis consequuntur alias est. Voluptatum doloremque fugiat aliquid. Sequi, quis odio possimus sunt nostrum saepe rem aspernatur, officiis nemo placeat quos! Quisquam, unde. Nobis reprehenderit saepe ducimus atque nisi dolores deserunt alias autem hic unde molestias necessitatibus assumenda repellat, incidunt rem ullam maiores id illo eum fugiat repellendus sint natus!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;