import { useTranslations } from "next-intl"
import {LanguageSwitcher} from "../../../components/LanguageSwitcher"
import { Link } from "@/i18n/navigation"

function AnnouncementBar() {
    const t=useTranslations('header.announcement')
  return (
    <div className='bg-mainColor px-20 py-5 text-white flex items-center justify-between'>
        <LanguageSwitcher/>
        <div className="flex items-center justify-center gap-2">
          <span>{t("title")}</span>
          <Link className="font-bold underline" href={'/'}>{t("shopNow")}</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link className="border border-white rounded px-2 py-1 font-semibold" href={'/sign-up'}>{t("signUp")}</Link>
          <Link  className='px-2 py-1 bg-white rounded text-mainColor font-semibold' href={'/sign-in'}>{t("signIn")}</Link>
        </div>
    </div>
  )
}

export default AnnouncementBar