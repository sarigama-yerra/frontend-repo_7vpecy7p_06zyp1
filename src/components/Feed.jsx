import { MessageSquare, Percent, ArrowRight } from 'lucide-react'

function OfferCard({ title, price, discount }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10 shadow-sm">
      <div className="aspect-[16/9] rounded-lg bg-white/5 mb-3" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="text-white/80">
          <span className="text-2xl font-extrabold">${price}</span>
          <span className="ml-2 text-lime-300 inline-flex items-center text-sm"><Percent className="w-4 h-4 mr-1" />{discount}%</span>
        </div>
        <button className="bg-lime-300 text-black px-3 py-2 rounded-md font-medium hover:bg-lime-200">Ver Oferta</button>
      </div>
    </div>
  )
}

function PetitionCard({ title, progress }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10 shadow-sm">
      <div className="aspect-[16/9] rounded-lg bg-white/5 mb-3" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="mt-3">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-lime-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 text-sm text-white/70">Apoyo: {progress}%</div>
      </div>
      <button className="mt-3 bg-lime-300 text-black px-3 py-2 rounded-md font-medium hover:bg-lime-200 inline-flex items-center">Aportar <ArrowRight className="w-4 h-4 ml-1" /></button>
    </div>
  )
}

export default function Feed() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-white text-2xl font-bold">Tu Feed Hoy</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <OfferCard title="Auriculares Pro X" price={129} discount={25} />
            <PetitionCard title="Compra grupal: Monitor 27" progress={62} />
            <OfferCard title="Teclado Mecánico" price={79} discount={15} />
            <PetitionCard title="Petición: Tarjeta Gráfica 4070" progress={48} />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-sm ring-1 ring-black/5">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Lo Más Interesante</h3>
            <div className="space-y-2">
              {["#Tecnología", "#Gaming", "#HogarInteligente"].map((t) => (
                <div key={t} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-200" />
                    <span className="text-sm">{t}</span>
                  </div>
                  <button className="text-xs px-2 py-1 rounded bg-lime-300 text-black font-medium">Seguir</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-lime-300 text-black rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-extrabold">¡Crea una Petición!</h3>
            <p className="text-black/70 mt-1">Lanza compras grupales y desbloquea mejores precios.</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md font-semibold">Crear ahora</button>
          </div>
        </aside>
      </div>
    </section>
  )
}
