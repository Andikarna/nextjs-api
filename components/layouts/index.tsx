import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import style from "../../styles/Layouts.module.css";
import Head from "next/head";

interface LayoutsProps {
  children: ReactNode;
  pageTitle:string;
}

export default function Layouts(props: LayoutsProps) {
  const { children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={style.container}>
        <Header />
        <div className={style.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
