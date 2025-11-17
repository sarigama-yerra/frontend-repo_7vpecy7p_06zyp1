import { Tag, MessageSquare, Search, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

function ForumCard({ title, tag, threads, activity }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg leading-snug">{title}</h3>
          <div className="mt-1 inline-flex items-center gap-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full"><Tag className="w-3 h-3" />{tag}</span>
            <span className="inline-flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {threads} hilos</span>
            <span className="inline-flex items-center gap-1"><Flame className="w-3 h-3 text-lime-300" /> {activity}</span>
          </div>
        </div>
        <button className="bg-lime-300 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-lime-200">Entrar</button>
      </div>
    </div>
  )
}

export default function Forums() {
  const forums = [
    { title: 'Tecnología y Gadgets', tag: 'Tech', threads: 241, activity: 'activo' },
    { title: 'Gaming y Accesorios', tag: 'Gaming', threads: 180, activity: 'alto' },
    { title: 'Hogar Inteligente', tag: 'Smart Home', threads: 96, activity: 'medio' },
    { title: 'Ofertas Relámpago', tag: 'Deals', threads: 72, activity: 'alto' },
    { title: 'Compras Grupales', tag: 'Group Buy', threads: 58, activity: 'creciendo' },
    { title: 'Audio y Música', tag: 'Audio', threads: 112, activity: 'medio' },
  ]

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-white text-3xl sm:text-4xl font-extrabold">Foros</h1>
            <p className="text-white/70">Explora temas, comparte descubrimientos y coordina compras grupales.</p>
          </div>
          <div className="flex-1 lg:max-w-md ml-auto">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-white/60" />
              <input placeholder="Buscar hilos o categorías..." className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 w-full" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forums.map((f) => (
            <ForumCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-10 bg-lime-300 text-black rounded-xl p-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold">¿No encuentras el tema?</h3>
            <p className="text-black/70">Crea un hilo nuevo y llama a la comunidad.</p>
          </div>
          <Link to="/peticiones" className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-black/80">Crear Petición</Link>
        </div>
      </div>
    </div>
  )
}
