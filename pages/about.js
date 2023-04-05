import React from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <main className={styles.main}>
        <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-red-900">
            About <i className="ri-shirt-line"></i>StyleMe!
          </span>{" "}
        </h1>
        <div className="h-100 w-22rem relative">
          <Image src="/about.jpg" height={350} width={350} alt="Clothing" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="mb-3 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mb-3 text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
