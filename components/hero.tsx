"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll("[data-count]")
    counters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-count") || "0")
      let current = 0
      const increment = target / 60
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        counter.textContent = Math.floor(current) + (counter.getAttribute("data-suffix") || "")
      }, 30)
    })
  }, [])

  const scrollToNext = () => {
    const el = document.querySelector("#sobre")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToInscricao = () => {
    const el = document.querySelector("#inscricao")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSobre = () => {
    const el = document.querySelector("#sobre")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/beachtennis.png"  className="w-full h-full object-cover" />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-arena-bg/80 via-arena-bg/50 to-arena-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-arena-bg/60 via-transparent to-arena-bg/40" />
      </div>

      {/* Animated green orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-arena-green/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-arena-green/8 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-arena-green animate-pulse" />
          <span className="font-display text-arena-green text-sm font-semibold tracking-widest uppercase">
            Pirassununga / SP
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black uppercase leading-none mb-6 animate-slide-up">
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-arena-white tracking-tight">
            Viva o Esporte,
          </span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-gradient-green tracking-tight">
            Sinta a Areia
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-arena-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animationDelay: "0.3s" }}
        >
          Futevôlei, Beach Tennis e Beach Volley em um espaço moderno e completo.
          Venha fazer parte da arena que move Pirassununga.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToInscricao}
            className="group relative font-display font-bold text-base uppercase tracking-widest px-8 py-4 rounded-full bg-arena-green text-arena-bg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 green-glow"
          >
            <span className="relative z-10">Inscreva-se Agora</span>
            <div className="absolute inset-0 bg-arena-green-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
          </button>
          <button
            onClick={scrollToSobre}
            className="group font-display font-bold text-base uppercase tracking-widest px-8 py-4 rounded-full border border-arena-white/30 text-arena-white hover:border-arena-green hover:text-arena-green transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Conheça o Clube
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: 2, suffix: "", label: "Quadras de Areia" },
            { value: 3, suffix: "", label: "Modalidades" },
            { value: 100, suffix: "+", label: "Alunos Ativos" },
            { value: 5, suffix: "★", label: "Avaliação" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 text-center"
            >
              <p
                className="font-display font-black text-3xl sm:text-4xl text-arena-green leading-none"
                data-count={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </p>
              <p className="font-sans text-arena-white/60 text-xs sm:text-sm mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-arena-white/40 hover:text-arena-green transition-colors duration-300 group"
        aria-label="Rolar para baixo"
      >
        <span className="font-display text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  )
}
