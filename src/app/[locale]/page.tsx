import AdsSection from "./home-components/adsSection/AdsSection";
import Features from "./home-components/features/Features";
import Hero from "./home-components/hero/Hero";
import styles from './home-components/styles.module.css'

type props={
  params:Promise<{locale:string}>
}

 
export default async function HomePage({params}:props) {
  const{locale}=await params
  return (
    <main className={styles.home}>
      <Hero/>
      <Features/>
      <AdsSection locale={locale}/>
    </main>
  );
}