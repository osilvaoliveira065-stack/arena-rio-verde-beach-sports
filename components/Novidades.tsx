"use client"

import { useEffect, useRef } from "react"
import { Calendar, ArrowRight, Tag } from "lucide-react"

const noticias = [
  {
    badge: "Torneio",
    badgeColor: "#f59e0b",
    title: "1º Torneio Arena Rio Verde de Beach Tennis",
    excerpt:
      "O aguardado torneio de abertura da temporada já tem data marcada! Participe e mostre seu talento nas quadras de areia. Inscrições abertas para duplas masculinas, femininas e mistas.",
    date: "15 Maio 2025",
    image:
      "https://placehold.co/600x400?text=Banner+de+torneio+de+beach+tennis+com+troféu+e+quadras+de+areia+ao+fundo+em+evento+esportivo+profissional",
    readTime: "2 min",
  },
  {
    badge: "Novidade",
    badgeColor: "#22c55e",
    title: "Novas Turmas de Futevôlei para Iniciantes",
    excerpt:
      "Nunca jogou futevôlei? Que ótimo! Abrimos novas turmas especialmente para iniciantes, com professor dedicado e horários na parte da manhã e à noite. Venha começar do zero!",
    date: "10 Maio 2025",
    image:
      "https://placehold.co/600x400?text=Aula+inaugural+de+futevôlei+para+iniciantes+em+quadra+de+areia+com+professor+demonstrando+tecnica",
    readTime: "3 min",
  },
  {
    badge: "Evento",
    badgeColor: "#3b82f6",
    title: "Arena Rio Verde recebe noite de beach volley",
    excerpt:
      "Uma noite especial com partidas temáticas, música ao vivo e muita diversão! Convidamos toda a comunidade para participar desse evento único que une esporte e entretenimento.",
    date: "5 Maio 2025",
    image:
      "https://placehold.co/600x400?text=Noite+de+beach+volley+com+iluminacao+especial+musica+ao+vivo+e+publico+animado+na+arena+esportiva",
    readTime: "2 min",
  },
  {
    badge: "Promoção",
    badgeColor: "#ec4899",
    title: "Matrícula com desconto no mês de Maio",
    excerpt:
      "Aproveite o mês de Maio e garanta sua matrícula com desconto especial. Válido para todas as modalidades. Oferta por tempo limitado — corra e inscreva-se antes que acabe!",
    date: "1 Mai 2025",
    image:
      "https://placehold.co/600x400?text=Banner+promocional+com+50+porcento+de+desconto+na+matrícula+com+cores+vibrantes+e+layout+moderno",
    readTime: "1 min",
  },
]

export default function Novidades() {
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
    <section id="novidades" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-arena-surface pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />
      <div className="absolute -left-40 bottom-1/2 w-96 h-96 rounded-full bg-arena-green/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
              <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
                Novidades
              </span>
            </div>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white text-balance">
              Fique por <span className="text-gradient-green">Dentro</span>
            </h2>
            <p className="font-sans text-arena-white/60 text-base mt-3 leading-relaxed max-w-lg">
              Notícias, eventos, torneios e promoções. Tudo que acontece na arena em primeira mão.
            </p>
          </div>
          <a
            href="https://instagram.com/arenariverdebeachsports"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest text-arena-green hover:text-arena-green-light transition-colors group"
          >
            Ver mais no Instagram
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Featured + small cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured card */}
          <div
            className="section-fade group lg:row-span-2 flex flex-col rounded-3xl overflow-hidden border border-arena-border hover:border-arena-green/30 transition-all duration-500 bg-arena-bg cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={noticias[0].image}
                alt={noticias[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arena-bg via-transparent to-transparent" />
              <span
                className="absolute top-4 left-4 font-display font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                style={{ backgroundColor: noticias[0].badgeColor }}
              >
                {noticias[0].badge}
              </span>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={14} className="text-arena-gray" />
                <span className="font-sans text-arena-gray text-xs">{noticias[0].date}</span>
                <Tag size={14} className="text-arena-gray" />
                <span className="font-sans text-arena-gray text-xs">{noticias[0].readTime} leitura</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-arena-white uppercase leading-tight mb-4 group-hover:text-arena-green transition-colors duration-300">
                {noticias[0].title}
              </h3>
              <p className="font-sans text-arena-white/60 text-sm leading-relaxed flex-1">
                {noticias[0].excerpt}
              </p>
              <div className="flex items-center gap-2 mt-6 text-arena-green font-display font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Ler mais
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {noticias.slice(1).map((noticia, i) => (
            <div
              key={i}
              className="section-fade group flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-arena-border hover:border-arena-green/30 transition-all duration-500 bg-arena-bg cursor-pointer"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden sm:w-44 flex-shrink-0 aspect-[3/2] sm:aspect-auto">
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: noticia.badgeColor }}
                >
                  {noticia.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={11} className="text-arena-gray" />
                    <span className="font-sans text-arena-gray text-[11px]">{noticia.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-arena-white uppercase leading-tight mb-2 group-hover:text-arena-green transition-colors line-clamp-2">
                    {noticia.title}
                  </h3>
                  <p className="font-sans text-arena-white/55 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {noticia.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-arena-green font-display font-bold text-xs uppercase tracking-wider">
                  Ler mais <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Ver mais */}
        <div className="section-fade flex justify-center mt-8 sm:hidden">
          <a
            href="https://instagram.com/arenariverdebeachsports"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest text-arena-green hover:text-arena-green-light transition-colors"
          >
            Ver mais no Instagram
            <ArrowRight size={1} />
          </a>
        </div>
      </div>
    </section>
  )
}
