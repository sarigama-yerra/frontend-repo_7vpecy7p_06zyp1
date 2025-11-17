import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Outlet />
    </div>
  )}
