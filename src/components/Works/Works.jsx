import {work1, work2, work3} from '../../assets'
import './Works.scss'
import {useViewPort} from '../hooks'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const workCard = [
  {
    image: work1,
    title:'Create an Account',
    text: 'We realize ideas from simple toomplex.',
  },
  {
    image: work2,
    title:'Attach Master Card',
    text: 'We realize ideas from simple toomplex.',
  },
  {
    image: work3,
    title:'Send Money',
    text: 'We realize ideas from simple toomplex.',
  },
]

function Works(){
  const viewport = useViewPort()
  const isPClowSolution = viewport.width >= 1113
  const isTablet = viewport.width >= 740
  const isMobile = viewport.width >= 500
  return<section className="works grid wide">
    <div className="row">
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
            workCard.map(e=>{
              return<SwiperSlide key={e.title}>
                      <div className="worksItem">
                        <div className="image">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="content">
                          <h3 className="title">{e.title}</h3>
                          <p className="greyText">{e.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
            })
          }
        </Swiper>
    </div>
  </section>
}

export default Works