import { CircleDot, ArrowRight, Sparkles } from 'lucide-react'

function RequestCard({ title, goal, progress }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 ring-1 ring-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-white/70 text-sm mt-1">Meta: {goal} apoyos</p>
          <div className="mt-3">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-lime-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-2 text-xs text-white/60">Progreso: {progress}%</div>
          </div>
        </div>
        <button className="bg-lime-300 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-lime-200 inline-flex items-center">Sumarme <ArrowRight className="w-4 h-4 ml-1" /></button>
      </div>
    </div>
  )
}

export default function Requests() {
  const requests = [
    { title: 'Compra grupal: SSD 2TB NVMe', goal: 100, progress: 65 },
    { title: 'Petición: Silla ergonómica premium', goal: 80, progress: 40 },
    { title: 'Compra grupal: Router WiFi 6E', goal: 120, progress: 72 },
    { title: 'Petición: Monitor 34\" ultrawide', goal: 90, progress: 30 },
    { title: 'Compra grupal: Auriculares ANC', goal: 150, progress: 54 },
    { title: 'Petición: Cámara mirrorless', goal: 70, progress: 22 },
  ]

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-white text-3xl sm:text-4xl font-extrabold">Peticiones</h1>
            <p className="text-white/70">Impulsa compras grupales y alcanza mejores precios con la comunidad.</p>
          </div>
          <button className="ml-auto inline-flex items-center gap-2 bg-lime-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-200">
            <Sparkles className="w-4 h-4" /> Crear Petición
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((r) => (
            <RequestCard key={r.title} {...r} />
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl p-6 ring-1 ring-black/5">
          <h3 className="font-semibold">Consejo</h3>
          <p className="text-sm text-neutral-700 mt-1">Describe tu necesidad y especificaciones. Cuanto más claro, más apoyos recibes.</p>
        </div>
      </div>
    </div>
  )
}
