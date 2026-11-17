import About from '@/content/about.mdx'
import styles from '@/app/top.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.page_title}>たちわざり研究室</h1>
        <div className={styles.page_content}>
          <About />
        </div>
        </div>
    </>
  );
}
