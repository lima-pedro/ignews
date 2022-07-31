import type { NextPage } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetServerSideProps } from "next";
import { stripe } from "../services/stripe";

import style from "./home.module.scss";

interface HomeProps {
  product: Product;
}

interface Product {
  priceId: string;
  amount: number;
}

const Home: NextPage<HomeProps> = ({ product }) => {
  console.log(product);
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
            <span>for {product.amount} for month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;

//GetServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve(
    process.env.STRIPE_PRICE_SUBSCRIBE || "",
    {
      expand: ["product"],
    }
  );

  console.log("price", price);

  const product = {
    priceId: price.id,
    amount:
      price.unit_amount &&
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
