import Features from "./home-components/features/Features";
import Hero from "./home-components/hero/Hero";
import styles from './home-components/styles.module.css'

 
export default function HomePage() {
  return (
    <main className={styles.home}>
      <Hero/>
      <Features/>
    </main>
  );
}