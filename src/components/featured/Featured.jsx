import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, aka Knight here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Building computer systems via problems rather than solutions</h1>
          <p className={styles.postDesc}>
            When it comes to building computer computer system, even
            something as simple as storing the name and address of universities
            can be surprisingly complicated and messy.  While the mess and complication
            often can’t be avoided, knowing what the end user needs are can help you come
            up with the best way of tackling them.
          </p>
          <button className={styles.button}>
            <Link href={`/posts/featured`} className={styles.link}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;