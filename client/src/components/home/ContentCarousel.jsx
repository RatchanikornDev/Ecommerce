import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import axios from 'axios'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

// import required modules
import { Pagination,Autoplay, Navigation } from 'swiper/modules'

const ContentCarousel = () => {
  //javascript
  const [data, setData] = useState([]);
  useEffect(() => {
    hdlGetImage()
  }, [])
  const hdlGetImage = async () => {
    //Code
    await axios
      .get('https://picsum.photos/v2/list?page=1&limit=20')
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper h-80 object-cover rounded-md mb-4"
      >
        {
            data?.map((item,index)=>
            <SwiperSlide>
                <img src={item.download_url}/>
            </SwiperSlide>
            )
        }
      </Swiper>

      <Swiper
       slidesPerView={5}
       spaceBetween={10}
       navigation={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination,Autoplay, Navigation]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper object-cover rounded-md"
      >
        {
            data?.map((item,index)=>
            <SwiperSlide>
                <img
                className='rounded-md '
                src={item.download_url}/>
            </SwiperSlide>
            )
        }
      </Swiper>
    </div>
  )
}

export default ContentCarousel
