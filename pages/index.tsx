import Layouts from "@/components/layouts";
import React from "react";
import Image from "next/image";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Layouts pageTitle={"HOME"}>
        <div className={style.container}>
          <div className={style.row}>
            <Image
              src={"/PP.jpg"}
              alt="Andikarna"
              width={200}
              height={200}
              className={style.image}
            />
            <div className={style.col}>
              <h1 className={style.title}>Andikarna</h1>
              <p className={style.label}>Developer & Programmer</p>
              <p className={style.label}>
                Setiap manusia memiliki <strong>Jatah untuk Jatuh.</strong>
                <br />
              </p>
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
}
