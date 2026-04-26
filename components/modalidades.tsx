"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const modalidades = [
  {
    id: "futevolei",
    name: "Futevôlei",
    tagline: "O futebol que vai às alturas",
    description:
      "A mistura perfeita entre futebol e vôlei. Técnica, habilidade e muita adrenalina em cada ponto. Uma das modalidades que mais cresce no Brasil, com treinos para todos os níveis.",
    highlights: ["Treinos individuais e em grupo", "Técnica e tática avançada", "Preparação para torneios"],
    image:
      "https://placehold.co/700x500?text=Atleta+executando+jogada+acrobática+de+futevôlei+na+areia+com+agilidade+e+técnica+em+quadra+profissional+ao+entardecer",
    color: "#22c55e",
    number: "01",
  },
  {
    id: "beachtennis",
    name: "Beach Tennis",
    tagline: "Velocidade e precisão na areia",
    description:
      "O esporte da moda! Praticado em duplas na areia, combina elementos do tênis e do vôlei de praia. Ótimo para condicionamento físico e socialização.",
    highlights: ["Equipamentos disponíveis", "Aulas para iniciantes", "Campeonatos mensais"],
    image:
      "https://placehold.co/700x500?text=Dupla+de+atletas+jogando+beach+tennis+em+quadra+de+areia+sob+sol+forte+com+raquetes+e+rede+profissional",
    color: "#4ade80",
    number: "02",
  },
  {
    id: "beachvolley",
    name: "Beach Volley",
    tagline: "Clássico e apaixonante",
    description:
      "O esporte olímpico da areia! Trabalho em equipe, força e fôlego. Disputas emocionantes e treinos completos para elevar seu nível no vôlei de praia.",
    highlights: ["Turmas por nível", "Treinos funcionais", "Amistosos e torneios"],
    image:
      "https://placehold.co/700x500?text=Jogadores+de+beach+volley+em+ação+saltando+para+bloquear+com+areia+ao+redor+em+quadra+profissional+iluminada",
    color: "#86efac",
    number: "03",
  },
]

export default function Modalidades() {
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

  const handleInscricao = (modalidade: string) => {
    const el = document.querySelector("#inscricao")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      // Try to pre-select the modality in the form
      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>("#modalidade-select")
        if (select) {
          select.value = modalidade
          select.dispatchEvent(new Event("change", { bubbles: true }))
        }
      }, 800)
    }
  }

  return (
    <section id="modalidades" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-arena-surface pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
            <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
              Modalidades
            </span>
          </div>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white text-balance">
            Escolha sua <span className="text-gradient-green">Paixão</span>
          </h2>
          <p className="font-sans text-arena-white/60 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Três modalidades incríveis, um único destino. Venha descobrir o esporte que vai mudar sua vida.
          </p>
        </div>

        {/* Modality cards */}
        <div className="flex flex-col gap-8">
          {modalidades.map((mod, i) => (
            <div
              key={mod.id}
              className={`section-fade group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-arena-border hover:border-arena-green/30 transition-all duration-500 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto min-h-[280px]">
                <img
                  src={mod.image}
                  alt={`${mod.name} - Modalidade esportiva na Arena Rio Verde Beach Sports`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-arena-bg/90 via-arena-bg/30 to-transparent" />
                {/* Number */}
                <span className="absolute top-6 left-6 font-display font-black text-6xl text-arena-white/10 select-none leading-none">
                  {mod.number}
                </span>
              </div>

              {/* Content */}
              <div className="bg-arena-surface-2 p-8 sm:p-10 flex flex-col justify-center">
                <span
                  className="font-display text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: mod.color }}
                >
                  Modalidade
                </span>
                <h3 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-arena-white mb-3">
                  {mod.name}
                </h3>
                <p className="font-display text-arena-green text-lg font-semibold mb-4 italic">
                  &ldquo;{mod.tagline}&rdquo;
                </p>
                <p className="font-sans text-arena-white/65 text-sm sm:text-base leading-relaxed mb-6">
                  {mod.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mb-8">
                  {mod.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-arena-green flex-shrink-0" />
                      <span className="font-sans text-arena-white/70 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleInscricao(mod.id)}
                  className="group/btn self-start flex items-center gap-3 font-display font-bold text-sm uppercase tracking-widest px-6 py-3.5 rounded-full bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Quero me Inscrever
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
