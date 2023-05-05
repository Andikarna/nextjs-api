import Layouts from "@/components/layouts";
import React from "react";
import style from "../styles/Blog.module.css";


interface Post{
  id:number;
  title: string;
  body: string;
}
interface BlogProps{
  dataBlog: Post[]
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layouts pageTitle="BLOG">
      <div className={style.container}>
        <h1 className={style.titleCard}>Semua Postingan</h1>
        {dataBlog.map((blog) => {
          return (
            <div key={blog.id} className={style.userCard}>
              <p className={style.itemCard}>Judul : {blog.title}</p>
              <p className={style.itemCard}>Body : {blog.body}</p>
            </div>
          );
        })}
        ;
      </div>
    </Layouts>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
