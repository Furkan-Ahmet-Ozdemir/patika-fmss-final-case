import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.scss';
import Link from "next/link";
import Head from 'next/head';
import { Button, Flex } from 'antd';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Realvine - Choose your dream place</title>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body >
        <header className={styles.header}>
          <div>
            <Link href="/">
              <svg aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <div>
            <nav className={styles.headerMenu}>
              <Link href="/login">Log In</Link>
              <Link href="/signup">Sign Up</Link>
              <Link href="/announcements">Announcements</Link>
              {/* <Link href="/signup" className="btn btn-secondary"> Signup</Link>
              <Button danger >Primary Button</Button> */}
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        
      <script src="../app/assets/js/script.js" defer></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async ></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async ></script>

      </body>
    </html>
  );
}
