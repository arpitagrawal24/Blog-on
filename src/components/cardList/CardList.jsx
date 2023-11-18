import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page, cat) => {
  try {
    const res = await fetch(
      `/api/posts?page=${page}&cat=${cat || ""}`,
      { cache: "reload" }
    );

    if (!res.ok) {
      console.error(`Failed to fetch data. Status: ${res.status}`);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error in getData:", error);
    throw error; // rethrow the error to be caught by the component
  }
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
