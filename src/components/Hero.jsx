import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-lime-300/90 bg-white/5 ring-1 ring-white/10 px-2.5 py-1 rounded-full">
              Comunidad • Compras • Ofertas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Tu hub social para descubrir ofertas y crear compras grupales
            </h1>
            <p className="text-white/70 text-lg">
              Explora foros, lanza peticiones y encuentra el mejor precio. Todo en un lugar con estética minimalista y futurista.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#crear-peticion" className="inline-flex items-center justify-center bg-lime-300 text-black px-5 py-3 rounded-md font-semibold hover:bg-lime-200 transition-colors">
                ¡Crea una Petición!
              </a>
              <a href="/ofertas" className="inline-flex items-center justify-center bg-white/10 text-white px-5 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors ring-1 ring-white/10">
                Ver Ofertas
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-lime-300/20 via-transparent to-yellow-300/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
