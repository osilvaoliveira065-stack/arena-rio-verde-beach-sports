"use client"

import { useEffect, useRef } from "react"
import { UtensilsCrossed, Beer, Flame, Coffee, Sandwich, Users } from "lucide-react"

const itens = [
  { icon: Sandwich, label: "Lanches", desc: "Hambúrgueres artesanais, wraps e muito mais" },
  { icon: UtensilsCrossed, label: "Porções", desc: "Frango, batata frita, isca de peixe e petiscos" },
  { icon: Beer, label: "Bebidas", desc: "Cervejas geladas, drinks, refrigerantes e sucos" },
  { icon: Flame, label: "Churrasqueira", desc: "Carnes e espetinhos no fogo para eventos especiais" },
  { icon: Coffee, label: "Cafés & Vitaminas", desc: "Opções leves para antes ou depois do treino" },
  { icon: Users, label: "Ambiente Social", desc: "Espaço perfeito para confraternizações e eventos" },
]

export default function Bar() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll(".section-fade")
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="bar" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-arena-surface pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="section-fade">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
                <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
                  Bar & Lazer
                </span>
              </div>
              <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white mb-5 text-balance">
                Esporte e{" "}
                <span className="text-gradient-green">Sabor</span>{" "}
                no Mesmo Lugar
              </h2>
              <p className="font-sans text-arena-white/65 text-base sm:text-lg leading-relaxed mb-8">
                Depois de uma partida incrível, o clima continua no bar da arena! Lanches frescos,
                porções generosas, bebidas geladas e churrasqueira no fim de semana. O lugar ideal
                para reunir a turma e prolongar os melhores momentos.
              </p>

              {/* Menu grid */}
              <div className="grid grid-cols-2 gap-4">
                {itens.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="section-fade group p-4 rounded-2xl bg-arena-bg border border-arena-border hover:border-arena-green/30 transition-all duration-300"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-arena-green/10 flex items-center justify-center group-hover:bg-arena-green/20 transition-colors">
                          <Icon size={16} className="text-arena-green" />
                        </div>
                        <span className="font-display font-bold text-sm tracking-wide text-arena-white">
                          {item.label}
                        </span>
                      </div>
                      <p className="font-sans text-arena-white/50 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="section-fade mt-8 p-5 rounded-2xl bg-arena-green/5 border border-arena-green/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-arena-green/15 flex items-center justify-center flex-shrink-0">
                  <Flame size={22} className="text-arena-green" />
                </div>
                <div>
                  <p className="font-display font-bold text-arena-white tracking-wide">
                    Eventos e Confraternizações
                  </p>
                  <p className="font-sans text-arena-white/55 text-sm">
                    Reserve o espaço para seu evento. Consulte disponibilidade!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images */}
          <div className="section-fade grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-arena-border">
                <img
                  src="https://placehold.co/400x533?text=Lanche+artesanal+gourmet+hamburguer+com+batatas+fritas+servido+em+tábua+rústica+no+bar+esportivo"
                  alt="Lanche artesanal do bar da Arena"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-arena-border">
                <img
                  src="https://placehold.co/400x400?text=Bebidas+geladas+e+drinks+coloridos+em+balcao+de+bar+esportivo+moderno+ao+ar+livre"
                  alt="Bebidas geladas e drinks no bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square border border-arena-border">
                <img
                  src="https://placehold.co/400x400?text=Churrasco+na+brasa+com+carnes+e+espetinhos+na+churrasqueira+ao+ar+livre+em+ambiente+festivo"
                  alt="Churrasqueira com carnes e espetinhos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-arena-border">
                <img
                  src="https://placehold.co/400x533?text=Ambiente+social+animado+com+pessoas+celebrando+e+confraternizando+em+area+de+lazer+esportiva"
                  alt="Ambiente social e confraternização na arena"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
