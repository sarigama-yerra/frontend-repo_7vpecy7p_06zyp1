import { Routes, Route } from 'react-router-dom'
import App from './App'
import Forums from './components/Forums'
import Deals from './components/Deals'
import Products from './components/Products'
import Requests from './components/Requests'
import Profile from './components/Profile'
import Test from './Test'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/foros" element={<><App /><Forums /></>} />
      <Route path="/ofertas" element={<><App /><Deals /></>} />
      <Route path="/productos" element={<><App /><Products /></>} />
      <Route path="/peticiones" element={<><App /><Requests /></>} />
      <Route path="/perfil" element={<><App /><Profile /></>} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
