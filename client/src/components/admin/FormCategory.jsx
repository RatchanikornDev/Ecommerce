import React, { useState, useEffect } from 'react'
import {
  createCategory,
  listCategory,
  removeCategory,
} from '../../api/Category'
import useEcomStore from '../../store/ecom-store'
import { toast } from 'react-toastify'
import { CircleX } from 'lucide-react'

const FormCategory = () => {
  //Javascript
  const token = useEcomStore((state) => state.token)
  const [name, setName] = useState('')
  // const [categories, setCategories] = useState([])
  const categories = useEcomStore((state) => state.categories)
  const getCategory = useEcomStore((state) => state.getCategory)
  useEffect(() => {
    getCategory(token)
  }, [])

  const handleSubmit = async (e) => {
    //code
    e.preventDefault()
    if (!name) {
      return toast.warning('Please fill data')
    }
    try {
      const res = await createCategory(token, { name })
      console.log(res.data.name)
      toast.success(`Add Category ${res.data.name} success!!!`)
      getCategory(token)
    } catch (err) {
      console.log(err)
    }
  }
  const handleRemove = async (id) => {
    //code
    console.log(id)
    try {
      const res = await removeCategory(token, id)
      console.log(res)
      toast.success(`Deleted${res.data.name}success`)
      getCategory(token)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container mx-auto p-4 bg-indigo-100 shadow-md rounded-md">
      <h1>Category Management</h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="border"
          type="text"
        />
        <button className="bg-blue-300 rounded-md">Add Category</button>
      </form>

      <hr />

      <ul className="list-none">
        {categories.map((item, index) => (
          <li className="flex justify-between my-2" key={index}>
            <span>{item.name}</span>

            <button
              className="bg-red-300 rounded-md"
              onClick={() => handleRemove(item.id)}
            >
              {/* <CircleX className="mr-2"/>*/}Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormCategory
