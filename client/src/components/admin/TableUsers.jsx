import React, { useState, useEffect } from 'react'
import { getListAllUsers } from '../../api/admin'
import useEcomStore from '../../store/ecom-store'
import { dateFormat } from '../../utils/dateformat'

const TableUsers = () => {
  const token = useEcomStore((state) => state.token)
  const [users, setUsers] = useState([])

  useEffect(() => {
    //code body
    handleGetUsers(token)
  }, [])

  const handleGetUsers = (token) => {
    getListAllUsers(token)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='"container mx-auto p-6 bg-white shadow-lg rounded-md"'>
      <table className="w-full">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>Email</th>
            {/* <th>วันที่แก้ไขล่าสุด</th> */}
            <th>สิทธิ์</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((el,i)=>(
            <tr key={el.id}>
            <td>{i+1}</td>
            <td>{el.email}</td>
            {/* <td>{dateFormat(el.updatedAt)}</td> */}
            <td>{el.role}</td>
            <td>
              {el.enabled ? 'Active' : 'Inactive'}
            </td>
            <td>
              action
            </td>
          </tr>
            
          ))}
          

        </tbody>

      </table>
    </div>
  )
}

export default TableUsers
