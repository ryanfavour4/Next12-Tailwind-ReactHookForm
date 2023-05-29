import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/custom/Header";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://favourryan.netlify.app">RF&apos;s Next.ts Practice!</a>
        </h1>

        <p className={styles.description}>
          I am Ryan Favour  Chukwuka and today ill be trying out Next 12
          <code className={styles.code}>May 2023</code>
        </p>

        <div className={styles.grid}>
          <Link href="/todo" className={styles.card}>
            <h2>TODO LIST</h2>
            <p>Drag the todo away when youre done</p>
          </Link>

          <Link href="/inputs" className={styles.card}>
            <h2>DYNAMIC FORM RHF</h2>
            <p>Generate new forms on the fly with React Hook Form</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
