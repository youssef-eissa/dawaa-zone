"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter  } from "next/navigation"
import en from '/public/assets/en-flag.png'
import ar from '/public/assets/ar-flag.png'
import Image from "next/image"
import { useLocale } from "next-intl"

export function LanguageSwitcher() {
    const pathname=usePathname()
    const router=useRouter()
    const activeLocale=useLocale()
  

    const locales=[
        {
            id:1,
            name:"English",
            value:"en",
            flag:en
        },
        {
            id:2,
            name:"العربية",
            value:"ar",
            flag:ar
        }
    ]


 function handleLanguageChange(locale:string){
    if(pathname.endsWith("sign-in")){
    window.location.href=`/${locale}/sign-in`
    } else if(pathname.endsWith("sign-up")){
      window.location.href=`/${locale}/sign-up`
      } else{
      const newPathname=pathname.replace(activeLocale,locale)
      router.replace(newPathname)
    }

  
}
  return (
    <Select   value={activeLocale} onValueChange={(value) => handleLanguageChange(value)}>
      <SelectTrigger aria-label="Language"  value={activeLocale} className=" ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:!border-white cursor-pointer">
        <SelectValue   />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          {locales.map(locale=>(
            <SelectItem  key={locale.id} className="focus:text-white focus:bg-mainColor focus:[&_svg]:!text-white [&_svg:not([class*='text-'])]:text-mainColor  flex items-center justify-center gap-2 hover:!bg-mainColor hover:!text-white transition-all duration-300 cursor-pointer " value={locale.value}>
              <div className="relative ">
            <Image sizes="20px" priority src={locale.flag} width={20} height={20} alt={locale.name+" flag"} />

              </div>
            <span className="text-white opacity-100">{locale.name}</span>
          </SelectItem>
          ))}
          
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
