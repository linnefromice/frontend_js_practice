import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <span className={styles.footer__titleSentence}>
          I'm here to stay (Footer)
        </span>
      </div>
    </div>
  </div>
);

export default Layout;
