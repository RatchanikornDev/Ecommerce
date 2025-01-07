//rafce
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { data } from 'react-router-dom'
import useEcomStore from '../../store/ecom-store'



export const Login = () => {
  //javascript
  const Pack = useEcomStore()
  console.log(Pack.name);
  


  const [form, setForm] = useState({
    email: ' ',
    password: ' ',
  })

  const handleOnChange = (e) => {
    //code
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log(form)
    // Send to Back
    try {
      //code
      const res = await axios.post('http://localhost:5500/api/login', form)
      
      

      console.log(res.data)
      toast.success(res.data)
    } catch (err) {
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        Email
        <input
          className="border"
          onChange={handleOnChange}
          name="email"
          type="email"
        />
        Password
        <input
          className="border"
          onChange={handleOnChange}
          name="password"
          type="text"
        />
        <button className="bg-blue-500 rounded-md">Login</button>
      </form>
    </div>
  )
}
