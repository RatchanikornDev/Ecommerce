import React, { useState, useEffect } from 'react'
import { getOrders } from '../../api/user'
import useEcomStore from '../../store/ecom-store'
import { dateFormat } from '../../utils/dateformat'
import { Numeral } from 'numeral'
import { numberFormat } from '../../utils/number'
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

  const getStatusColor = (status)=>{
    switch (status){
      case "Not Process":
      return 'bg-gray-200';
      case "Processing":
      return 'bg-blue-200';
      case "Completed":
      return 'bg-green-200';
      case "Cancel already":
      return 'bg-red-200';
    }
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
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-sm">Order Date</p>
                  <p className="font-bold">{dateFormat(item.updatedAt)}</p>
                </div>
                <div>
                  <span className={`${getStatusColor(item.orderStatus)} px-2 py-1 rounded-full`}>
                  {item.orderStatus}
                  </span>
                </div>
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
                        <td>{numberFormat(product.product.price)}</td>
                        <td>{numberFormat(product.count)}</td>
                        <td>{numberFormat(product.count * product.product.price)}</td>
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
                  <p>{numberFormat(item.cartTotal)}</p>
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
