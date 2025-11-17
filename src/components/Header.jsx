import { Link, NavLink } from 'react-router-dom'
import { Search, User, Home, MessageSquare, Tag, ShoppingBag } from 'lucide-react'

const navItemClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-lime-300 text-black' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-300 to-yellow-300" />
          <span className="font-semibold tracking-tight">Deal&Buy</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 w-full max-w-xl">
            <Search className="w-4 h-4 text-white/60" />
            <input
              placeholder="Buscar productos, foros, peticiones..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 w-full"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navItemClass}>
            <Home className="inline w-4 h-4 mr-1" /> Home
          </NavLink>
          <NavLink to="/foros" className={navItemClass}>
            <MessageSquare className="inline w-4 h-4 mr-1" /> Foros
          </NavLink>
          <NavLink to="/ofertas" className={navItemClass}>
            <Tag className="inline w-4 h-4 mr-1" /> Ofertas
          </NavLink>
          <NavLink to="/productos" className={navItemClass}>
            <ShoppingBag className="inline w-4 h-4 mr-1" /> Productos
          </NavLink>
        </nav>

        <Link to="/perfil" className="ml-auto md:ml-0 inline-flex items-center gap-2 bg-lime-300 text-black px-3 py-2 rounded-md font-medium hover:bg-lime-200 transition-colors">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Perfil</span>
        </Link>
      </div>
    </header>
  )
}
