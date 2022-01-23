import './Service.scss'
import {service} from '../../assets'
import {useViewPort} from '../hooks'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const serviceHeading = {
  title: 'service',
  heading: 'Choose Best Service  from Our List',
  text: 'We operate our banking services in many countries around the world.'
}

const serviceData = [
  {
    image:service.personalLoan,
    title: 'personal loan',
    desc: 'We realize ideas from simple toomplex.',
  },
  {
    image:service.businessLoan,
    title: 'business loan',
    desc: 'We realize ideas from simple toomplex.',
  },
  {
    image:service.deposit,
    title: 'online deposit',
    desc: 'We realize ideas from simple toomplex.',
  },
  {
    image:service.mobileBanking,
    title: 'mobile banking',
    desc: 'We realize ideas from simple toomplex.',
  },
  {
    image:service.creditCard,
    title: 'credit card',
    desc: 'We realize ideas from simple toomplex.',
  },
  {
    image:service.education,
    title: 'education loan',
    desc: 'We realize ideas from simple toomplex.',
  },
]

function Service(){
  const viewport = useViewPort()
  const isPClowSolution = viewport.width >= 1113
  const isTablet = viewport.width >= 740
  const isMobile = viewport.width >= 500

  return<section className="service grid wide">
      <div className="spotlight"></div>
      <div className="serviceTop">
        <span className="title">{serviceHeading.title}</span>
        <h2 className="heading">{serviceHeading.heading}</h2>
        <p>{serviceHeading.text}</p>
      </div>
      <div className="serviceList row">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 2000,
                disableOnInteraction: false
              }}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={isPClowSolution ? 3 : isTablet ? 2 : isMobile ? 1 : 1}
            >
              {
                serviceData.map((e,index)=>{
                  return<SwiperSlide key={index}>
                            <div className="serviceItem">
                              <div className="image">
                                <img src={e.image} alt="" />
                              </div>
                              <div className="content">
                                <h3>{e.title}</h3>
                                <p>{e.desc} <span>Read More</span></p>
                              </div>
                            </div>
                        </SwiperSlide>
                })
              }
            </Swiper> 
      </div>
  </section>
}

export default Service