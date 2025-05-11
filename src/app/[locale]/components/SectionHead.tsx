import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { MdKeyboardArrowRight } from "react-icons/md";

type props={
    title:string
}


function SectionHead({title}:props) {
    const t=useTranslations("sectionHead")
  return (
    <div className='w-full flex justify-between items-center border-b border-b-gray-300 pb-3'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <Link className='text-mainColor flex items-center gap-0.5' href={''}>{t("viewAll")} <MdKeyboardArrowRight size={16}/></Link>
    </div>
  )
}

export default SectionHead