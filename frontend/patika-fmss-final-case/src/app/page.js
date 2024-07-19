import Image from "next/image";
import styles from "./page.module.scss";
import Layout from "./layout";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Nike Home</h1>
        <Image
          src={
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-lBNjJR.png"
          }
          fill={true}
        />
    </main>
  );
}

// src/app
// └── announcements
//     ├── [announcementsId]
//     │   ├── page.js
//     │   ├── layout.js
//     │   ├── user.js
//     │   ├── product.js
//     │
//     │── page.js
//     └── page.module.scss
//     └── data.json
//     └── loading.js
//     └── ProductItem.js
//     └── not-found.js
// └── global.scss
// └── layout.js
// └── page.js
// └── page.module.scss
