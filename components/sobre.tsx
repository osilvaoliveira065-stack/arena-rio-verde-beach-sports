"use client"

import { useEffect, useRef } from "react"
import { Waves, Flame, Users, Trophy, Star, MapPin } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "2 Quadras de Areia",
    desc: "Quadras profissionais com areia de qualidade, perfeitas para treinos e torneios.",
  },
  {
    icon: Flame,
    title: "Bar & Churrasqueira",
    desc: "Ambiente completo com bar, churrasqueira e lanches para curtir depois do jogo.",
  },
  {
    icon: Users,
    title: "Para Todos os Níveis",
    desc: "Do iniciante ao avançado, temos turmas e horários para todos os perfis.",
  },
  {
    icon: Trophy,
    title: "Torneios e Eventos",
    desc: "Participe de campeonatos internos e eventos especiais ao longo do ano.",
  },
  {
    icon: Star,
    title: "Estrutura Premium",
    desc: "Vestiários, iluminação noturna e toda infraestrutura para sua comodidade.",
  },
  {
    icon: MapPin,
    title: "Localização Central",
    desc: "Fácil acesso no coração de Pirassununga, com estacionamento disponível.",
  },
]

export default function Sobre() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll(".section-fade")
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-arena-green/3 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/2 w-96 h-96 rounded-full bg-arena-green/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
            <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
              Sobre o Clube
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white mb-6 text-balance">
                Onde o Esporte{" "}
                <span className="text-gradient-green">Encontra</span> a Paixão
              </h2>
              <p className="font-sans text-arena-white/65 text-base sm:text-lg leading-relaxed mb-4">
                A <strong className="text-arena-green font-semibold">Arena Rio Verde Beach Sports</strong> nasceu
                da paixão pelos esportes de praia em Pirassununga/SP. Com estrutura moderna e ambiente
                acolhedor, somos o destino certo para quem quer praticar esporte com qualidade.
              </p>
              <p className="font-sans text-arena-white/65 text-base sm:text-lg leading-relaxed mb-8">
                Nosso espaço foi pensado para oferecer a melhor experiência, seja num treino casual
                com amigos ou numa competição acirrada. Aqui, todo mundo é bem-vindo.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-arena-surface-2 border border-arena-border">
                  <span className="w-2 h-2 rounded-full bg-arena-green" />
                  <span className="font-display text-sm text-arena-white/80 tracking-wide">Futevôlei</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-arena-surface-2 border border-arena-border">
                  <span className="w-2 h-2 rounded-full bg-arena-green" />
                  <span className="font-display text-sm text-arena-white/80 tracking-wide">Beach Tennis</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-arena-surface-2 border border-arena-border">
                  <span className="w-2 h-2 rounded-full bg-arena-green" />
                  <span className="font-display text-sm text-arena-white/80 tracking-wide">Beach Volley</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-arena-border">
                <img
                  src="https://placehold.co/800x600?text=Vista+aerea+de+quadras+de+beach+sports+com+areia+branca+e+iluminacao+profissional+noturna+em+complexo+esportivo+moderno"
                  alt="Vista das quadras de areia da Arena Rio Verde Beach Sports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-bg/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 border border-arena-green/20">
                <p className="font-display font-black text-3xl text-arena-green leading-none">5+</p>
                <p className="font-sans text-arena-white/60 text-xs mt-0.5">Anos de história</p>
              </div>
              <div className="absolute -top-5 -right-5 glass rounded-2xl p-4 border border-arena-green/20">
                <p className="font-display font-black text-3xl text-arena-green leading-none">100%</p>
                <p className="font-sans text-arena-white/60 text-xs mt-0.5">Satisfação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="section-fade group p-6 rounded-2xl bg-arena-surface border border-arena-border hover:border-arena-green/40 transition-all duration-300 hover:bg-arena-surface-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-arena-green/10 border border-arena-green/20 flex items-center justify-center mb-4 group-hover:bg-arena-green/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-arena-green" />
                </div>
                <h3 className="font-display font-bold text-lg text-arena-white mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-sans text-arena-white/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
