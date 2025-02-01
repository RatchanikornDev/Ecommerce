//rafce

import BestSeller from '../components/home/BestSeller'
import ContentCarousel from '../components/home/ContentCarousel'

const Home = () => {
  return (
    <div>
      <ContentCarousel />

      <p className="text-2xl text-center my-4">สินค้าขายดี</p>
      <BestSeller/>



    </div>
  )
}

export default Home
