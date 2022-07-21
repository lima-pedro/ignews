import type { NextPage } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import style from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            New about the <br />
            <span>React</span> world.
          </h1>
          <p>
            Get access to all the publication <br />
            <span>for $9.90 for month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
        
      </main>
    </>
  );
};

export default Home;
