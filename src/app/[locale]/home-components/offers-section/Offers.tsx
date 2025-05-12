import Image from 'next/image'
import styles from './styles.module.css'
import garlic from '/public/assets/garlic.png'
import toothpaste from '/public/assets/toothpaste.png'
import brush from '/public/assets/brush.png'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
function Offers() {
    const t=useTranslations('home.offers')
    const currency = useTranslations('currency')
  return (
    <section className={styles.offers}>
        <div>
            <div>
                <span>{t('off')}</span>
                <Link href={''}>{t('garlicTitle')}</Link>
                <span>{t('garlicText')}</span>
                <del>37 {currency('currency')}</del>
                <span>30 {currency('currency')}</span>
            </div>
            <div>
                <Image src={garlic} alt='garlic' fill className='object-contain'/>
            </div>
        </div>
        <div>
            <div>
                <span>{t('off')}</span>
                <Link href={''}>{t('dentalTitle')}</Link>
                <span>{t('dentalText')}</span>
                <del>102 {currency('currency')}</del>
                <span>90 {currency('currency')}</span>
            </div>
            <div>
                <Image src={brush} alt='brush' fill className='object-contain'/>
            </div>
        </div>
        <div>
            <div>
                <span>{t('off')}</span>
                <Link href={''}>{t('bananaTitle')}</Link>
                <span>{t('bananaText')}</span>
                <del>200 {currency('currency')}</del>
                <span>140 {currency('currency')}</span>
            </div>
            <div>
                <Image src={toothpaste} alt='toothpaste' fill className='object-contain'/>
            </div>
        </div>
    </section>
  )
}

export default Offers