import { User, Star, MessageSquare, Heart } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </div>
  )
}

function ActivityItem({ icon: Icon, title, meta }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-lime-300" />
      </div>
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-white/60">{meta}</div>
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-black text-white rounded-xl p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-lime-300 to-yellow-300" />
                <div>
                  <div className="text-xl font-extrabold">Usuario Pro</div>
                  <div className="text-white/60 text-sm">Miembro desde 2024</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <Stat label="Peticiones" value="12" />
                <Stat label="Ofertas" value="34" />
                <Stat label="Seguidores" value="1.2k" />
              </div>
              <button className="mt-6 w-full bg-lime-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-200">Editar Perfil</button>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-lime-300" />
              <h1 className="text-white text-2xl font-bold">Actividad reciente</h1>
            </div>

            <div className="bg-black text-white rounded-xl p-6 ring-1 ring-white/10 space-y-4">
              <ActivityItem icon={Star} title="Marcaste una oferta como favorita" meta="hace 2h • Teclado Compact 60%" />
              <ActivityItem icon={MessageSquare} title="Comentaste en un hilo de Foros" meta="hace 5h • Gaming y Accesorios" />
              <ActivityItem icon={Heart} title="Apoyaste una petición" meta="ayer • Router WiFi 6E" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
