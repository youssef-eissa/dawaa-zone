import AdsSection from "./home-components/adsSection/AdsSection";
import Features from "./home-components/features/Features";
import Hero from "./home-components/hero/Hero";
import Offers from "./home-components/offers-section/Offers";
import styles from './home-components/styles.module.css'
import TrendingProducts from "./home-components/trending-products/TrendingProducts";

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
      <TrendingProducts locale={locale}/>
      <Offers/>
    </main>
  );
}