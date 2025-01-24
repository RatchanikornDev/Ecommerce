import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useEcomStore from '../store/ecom-store'
import { ShoppingCart, Home, Store, LogIn, UserPlus } from 'lucide-react'

const MainNav = () => {
  const carts = useEcomStore((state) => state.carts)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Ratchanikorn
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:text-white transition-colors'
                    : 'flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors'
                }
                to={'/'}
              >
                <Home className="w-4 h-4" />
                หน้าแรก
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:text-white transition-colors'
                    : 'flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors'
                }
              >
                <Store className="w-4 h-4" />
                ร้านค้า
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:text-white transition-colors'
                    : 'flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors'
                }
              >
                <ShoppingCart className="w-4 h-4" />
                ตะกร้า
                {carts.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {carts.length}
                  </span>
                )}
              </NavLink>
            </div>
          </div>

          {/* Right Section - Auth Links */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:text-white transition-colors'
                  : 'flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors'
              }
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">สมัครสมาชิก</span>
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:text-white transition-colors'
                  : 'flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-colors'
              }
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">เข้าสู่ระบบ</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
