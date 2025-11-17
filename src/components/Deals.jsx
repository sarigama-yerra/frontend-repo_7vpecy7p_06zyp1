import { SlidersHorizontal, Percent, Tag } from 'lucide-react'

function DealCard({ title, price, discount, expires }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10">
      <div className="aspect-[16/9] rounded-lg bg-white/5 mb-3" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="text-white/80">
          <span className="text-2xl font-extrabold">${price}</span>
          <span className="ml-2 text-lime-300 inline-flex items-center text-sm"><Percent className="w-4 h-4 mr-1" />{discount}%</span>
        </div>
        <span className="text-xs text-white/60">Expira: {expires}</span>
      </div>
      <button className="mt-3 bg-lime-300 text-black px-3 py-2 rounded-md font-medium hover:bg-lime-200 inline-flex items-center"><Tag className="w-4 h-4 mr-1" /> Ver oferta</button>
    </div>
  )
}

function FiltersBar() {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
      <SlidersHorizontal className="w-4 h-4 text-white/70" />
      <select className="bg-transparent text-sm text-white/80 outline-none">
        <option className="bg-black">Categoría</option>
        <option className="bg-black">Tecnología</option>
        <option className="bg-black">Gaming</option>
        <option className="bg-black">Hogar</option>
      </select>
      <select className="bg-transparent text-sm text-white/80 outline-none">
        <option className="bg-black">Ordenar</option>
        <option className="bg-black">Descuento</option>
        <option className="bg-black">Recientes</option>
        <option className="bg-black">Expiran pronto</option>
      </select>
    </div>
  )
}

export default function Deals() {
  const deals = [
    { title: 'Portátil 14\" Ryzen', price: 599, discount: 30, expires: '2d' },
    { title: 'TV 55\" 4K', price: 399, discount: 22, expires: '6h' },
    { title: 'Smartwatch Pro', price: 149, discount: 18, expires: '1d' },
    { title: 'Robot aspirador', price: 189, discount: 35, expires: '8h' },
    { title: 'Barra de sonido', price: 119, discount: 25, expires: '4d' },
    { title: 'Router WiFi 6', price: 89, discount: 15, expires: '1d' },
  ]

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-extrabold">Ofertas</h1>
            <p className="text-white/70">Aprovecha descuentos seleccionados por la comunidad.</p>
          </div>
          <FiltersBar />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((d) => (
            <DealCard key={d.title} {...d} />
          ))}
        </div>
      </div>
    </div>
  )
}
