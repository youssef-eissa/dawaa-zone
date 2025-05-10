import styles from './styles.module.css'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney,GiPayMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useTranslations } from 'next-intl';


function Features() {
    const t=useTranslations("home.features");
    const features=[
        {
            id:1,
            icon:<TbTruckDelivery size={30}/>,
            title:t("freeShippingBox.title"),
            text:t("freeShippingBox.text"),
        },
          {
            id:2,
            icon:<GiReceiveMoney size={30}/>,
            title:t("securePaymentBox.title"),
            text:t("securePaymentBox.text"),
        },
        {
            id:3,
            icon:<GiPayMoney size={30}/>,
            title:t("moneyBackBox.title"),
            text:t("moneyBackBox.text"),
        },
        {
            id:4,
            icon:<RiCustomerService2Fill size={30}/>,
            title:t("customerSupportBox.title"),
            text:t("customerSupportBox.text"),
        },
    ]
  return (
    <section className={styles.features}>
       {features.map(feature=>(
        <div className={styles.featureBox} key={feature.id}>
            <span>
                {feature.icon}
            </span>
            <div>
                <h3>{feature.title}</h3>
                <span>{feature.text}</span>
            </div>
        </div>
       ))}
    </section>
  )
}

export default Features