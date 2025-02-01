import React, { useEffect, useState } from 'react'
import { listProductBy } from '../../api/product'
import ProductCard from '../card/ProductCard'
const BestSeller = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //code
    loadData()
  }, [])

  const loadData = () => {
    listProductBy('sold', 'desc', 12)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  )
}

export default BestSeller
