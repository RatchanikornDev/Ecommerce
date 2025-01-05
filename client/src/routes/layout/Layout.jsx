import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <h1>Main Nav</h1>
        <hr></hr>
        <Outlet/>
    </div>
  )
}

export default Layout