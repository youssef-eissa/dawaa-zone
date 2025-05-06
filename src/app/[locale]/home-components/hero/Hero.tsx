"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles.module.css'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import heroImg from '/public/assets/heroImg.png'
import call from '/public/assets/pharma-call.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper as SwiperType } from "swiper/types";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CiShoppingCart } from "react-icons/ci";
import { GoArrowRight , GoArrowLeft} from "react-icons/go";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import {  useRef, useState } from 'react';





function Hero() {
  const t=useTranslations('home.hero')
  const swiperRef = useRef<SwiperType|null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
 

  function handleNext(){
    if(swiperRef.current){
      swiperRef.current.slideNext();
    }
  }
  function SlideNext(){
    return(
      <button aria-label='next' onClick={handleNext} className={styles.slideNext}>
        <GoArrowRight size={50} color='white'/>
      </button>
    )
  }
  function handlePrev(){
    if(swiperRef.current){
      swiperRef.current.slidePrev();
    }
  }

  function SlidePrev(){
    return(
      <button aria-label='prev' onClick={handlePrev} className={styles.slidePrev}>
        <GoArrowLeft size={50} color='white'/>
      </button>
    )
  }


  const slides=[
    {
      id:1,
      title:t('title'),
      subtitle:t('subtitle'),
      img:heroImg,
      links:[
        {
          id:1,
          text:t('shopNow'),
          icon:<CiShoppingCart size={24}/>,
          href:'/'
        },
        {
          id:2,
          text:t('topProducts'),
          icon:<GoArrowRight size={24}/>,
          href:'/'
        }
      ]
    },
    {
      id:2,
      title:t('fastDelivery'),
      subtitle:t('fastDeliverySubtitle'),
      linkTitle:t('orderNow'),
    },
    {
      id:3,
      title:t('needHelp'),
      subtitle:t('needHelpSubTitle'),
      linkTitle:t('call'),
      img:call
    }
  ]

  return (
    <section className={styles.hero}>
       <Swiper
       
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
       className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      loop
      autoplay
      pagination={{ clickable: true ,bulletActiveClass: styles.activeBullet,bulletClass: 'swiper-pagination-bullet', 
      }}
      slidesPerView={1}
      speed={1500}
      onSlideChange={(swiper) => {
        setCurrentSlide(swiper.realIndex);
          
      }}

    >
      <SlideNext/>
      <SlidePrev/>
        {slides?.map(slide=>(
          <SwiperSlide key={slide.id} className={`${slide.id===1 || slide.id===3?"!grid grid-cols-2 h-full":slide.id===2&&"h-full !flex flex-col justify-center items-center gap-5 text-white"}`}>
          {slide.id===1?
          <>
          <motion.div
        
          initial={{  x: -300 ,opacity: 0 }}
          animate={{  x: 0,opacity: 1 }}
          exit={{  x: -300 ,opacity: 0 }}
          transition={{ duration: 1.5 ,type:'spring' }}
          
          
           className='flex flex-col p-20 text-white gap-5'>
            <h1  className='text-6xl font-bold leading-20'>{slide.title}</h1>
            <span>{slide.subtitle}</span>
            <div className={styles.links}>
              {slide.links?.map(link=>(
                <Link key={link.id} href={link.href} className={styles.link}>
                  {link.text} {link.icon}
                </Link>
              ))}
             
            </div>
          </motion.div>
          <motion.div key={currentSlide+1} initial={{  x: 100 }} animate={{  x: 0 }} transition={{ duration: 1.5 ,type:'spring' }} className='relative col-span-1'>
          <Image className='object-contain'     width={800}
  height={500} priority 
  src={heroImg} alt='heroImg' />
          </motion.div>
          </>
          :slide.id===2?
          <>
          <motion.span
          initial={{  x: -100 }}
          animate={{  x: 0 }}
          transition={{ duration: 2 ,bounce: 0.5,}}

          key={currentSlide}
          className='text-4xl font-bold'>
        🚚 {slide.title}
        </motion.span>
        <motion.span
        initial={{  x: 100 }}
        animate={{  x: 0 }}
        transition={{ duration: 2 ,bounce: 0.5}}
        key={currentSlide+2}
        className='text-2xl'>
          {slide.subtitle}
        </motion.span>
        <Link className={styles.orderNow} href={''}>{t("orderNow")} <MdOutlineAddShoppingCart size={24}/>
        </Link>
          </>
          :
         <>
          <motion.div key={currentSlide} initial={{  x: -100 }} animate={{  x: 0 }} exit={{  x: -100 }} transition={{ duration: 1.5 ,type:'spring' }} className='flex flex-col p-20 gap-5  items-center justify-center text-white'>
            <span className='text-3xl font-bold'> {slide.title}</span>
            <span>{slide.subtitle}</span>
            <Link className={styles.orderNow} href={''}>{t("call")} <IoCallOutline size={24}/></Link>
          </motion.div>
        <div className='relative col-span-1'>
          <Image   sizes="(max-width: 768px) 100vw, 50vw"
 fill src={call} alt='call' className='object-contain'/>
          </div>
         </>
          }
        </SwiperSlide>
        ))}
        
      
      
    </Swiper>


    </section>

  
  )
}

export default Hero


