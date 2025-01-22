import React, { useState, useEffect } from 'react'
import { getOrders } from '../../api/user'
import useEcomStore from '../../store/ecom-store'

const HistoryCard = () => {
  const token = useEcomStore((state) => state.token)
  // console.log(token);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // code
    hdlGetOrders(token)
  }, [])

  const hdlGetOrders = (token) => {
    getOrders(token)
      .then((res) => {
        // console.log(res);
        setOrders(res.data.orders)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='space-y-4'>
      <h1 className="text-2xl font-bold">ประวัติการสั่งซื้อ</h1>

      {/* คลุม */}
      <div className='space-y-4'>
        {orders?.map((item,index) => {
          // console.log(item);    
          return (
            <div 
            key={index}
            className="bg-gray-200 p-4 rounded-md shadow-md">
              {/* Header */}
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Order Date</p>
                  <p className="font-bold">{item.updatedAt}</p>
                </div>
                <div>{item.orderStatus}</div>
              </div>
              {/* table Loop Product */}
              <div>
                <table className="border w-full ">
                  <thead>
                  <tr className="bg-gray-300">
                    <th>สินค้า</th>
                    <th>ราคา</th>
                    <th>จำนวน</th>
                    <th>รวม</th>
                  </tr>
                  </thead>
                  <tbody>

                  {
                    item.products?.map((product,index)=>{
                      // console.log(product);
                      return(
                      <tr key={index}>
                        <td>{product.product.title}</td>
                        <td>{product.product.price}</td>
                        <td>{product.count}</td>
                        <td>{product.count * product.product.price}</td>
                      </tr>
                      )
                    })
                  }
                 

                  </tbody>

                </table>
              </div>
              {/* total */}
              <div>
                <div className='text-right'>
                  <p>ราคาสุทธิ</p>
                  <p>{item.cartTotal}</p>
                </div>
              {/* card Loop order */}
              </div>
            </div>
          )
        })}





      </div>
    </div>
  )
}

export default HistoryCard
