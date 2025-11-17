import { SlidersHorizontal, Percent, ShoppingCart } from 'lucide-react'

function ProductCard({ title, price, discount }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10">
      <div className="aspect-[16/9] rounded-lg bg-white/5 mb-3" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="text-white/80">
          <span className="text-2xl font-extrabold">${price}</span>
          {discount ? (
            <span className="ml-2 text-lime-300 inline-flex items-center text-sm"><Percent className="w-4 h-4 mr-1" />{discount}%</span>
          ) : null}
        </div>
        <button className="bg-lime-300 text-black px-3 py-2 rounded-md font-medium hover:bg-lime-200 inline-flex items-center">
          <ShoppingCart className="w-4 h-4 mr-1" /> Añadir
        </button>
      </div>
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
        <option className="bg-black">Precio asc</option>
        <option className="bg-black">Precio desc</option>
        <option className="bg-black">Descuento</option>
      </select>
    </div>
  )
}

export default function Products() {
  const items = [
    { title: 'Teclado Compact 60%', price: 69, discount: 10 },
    { title: 'Mouse Inalámbrico Pro', price: 49, discount: 0 },
    { title: 'Monitor 27\" IPS 144Hz', price: 199, discount: 15 },
    { title: 'Auriculares ANC', price: 129, discount: 20 },
    { title: 'SSD NVMe 1TB', price: 79, discount: 5 },
    { title: 'Silla ergonómica', price: 229, discount: 12 },
  ]

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-extrabold">Productos</h1>
            <p className="text-white/70">Descubre artículos curados por la comunidad.</p>
          </div>
          <FiltersBar />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}
