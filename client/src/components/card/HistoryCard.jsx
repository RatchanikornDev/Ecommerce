import React from 'react'

const HistoryCard = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>ประวัติการสั่งซื้อ</h1>

          {/* คลุม */}
          <div>
                {/* card Loop order */}
              <div className='bg-gray-200 p-4 rounded-md shadow-md'>
                    {/* Header */}
                      <div className='flex justify-between'>
                        <div>
                          <p className='text-sm'>Order Date</p>
                          <p className='text-bold'>วันที่.......</p>
                        </div>
                        <div>
                          Status
                        </div>  
                      
                      </div>
                      {/* table Loop Product */}
                      <div>
                      <table className='border w-full '>
                              <tr className='bg-gray-300'>
                                <th>สินค้า</th>
                                <th>ราคา</th>
                                <th>จำนวน</th>
                                <th>รวม</th>
                              </tr>
                              <tr>
                                <td>gtx3060</td>
                                <td>13900</td>
                                <td>1</td>
                              </tr>
                            </table>
                      </div>
                      {/* total */}
                      <div>
                          <div>
                            <p>ราคาสุทธิ</p>
                            <p>500000</p>
                          </div>
                      </div>
              </div>

          </div>

    </div>
  )
}

export default HistoryCard