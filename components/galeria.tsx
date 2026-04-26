"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = [
  {
    src: "https://placehold.co/800x600?text=Quadra+de+beach+tennis+profissional+com+rede+oficial+e+areia+branca+fina+iluminada+por+refletores+noturnos",
    alt: "Quadra de beach tennis com areia e iluminação noturna",
    label: "Beach Tennis",
  },
  {
    src: "https://placehold.co/800x600?text=Jogadores+de+futevolei+treinando+em+dupla+na+areia+com+tecnica+acrobatica+e+sol+ao+fundo",
    alt: "Treino de futevôlei em dupla com acrobacias",
    label: "Futevôlei",
  },
  {
    src: "https://placehold.co/800x600?text=Vista+panoramica+da+arena+esportiva+com+duas+quadras+de+areia+bar+e+churrasqueira+ao+fundo",
    alt: "Vista panorâmica da Arena Rio Verde",
    label: "Estrutura",
  },
  {
    src: "https://placehold.co/800x600?text=Torneio+de+beach+volley+com+publico+assistindo+ao+redor+das+quadras+em+dia+ensolarado",
    alt: "Torneio de beach volley com público presente",
    label: "Torneios",
  },
  {
    src: "https://placehold.co/800x600?text=Bar+e+area+de+lazer+do+clube+com+mesas+guarda-sois+e+churrasqueira+decorada+ao+ar+livre",
    alt: "Bar e área de lazer com churrasqueira",
    label: "Bar & Lazer",
  },
  {
    src: "https://placehold.co/800x600?text=Grupo+de+alunos+comemorando+vitoria+na+quadra+de+areia+com+sorrisos+e+equipe+unida",
    alt: "Alunos comemorando vitória na quadra",
    label: "Comunidade",
  },
  {
    src: "https://placehold.co/800x600?text=Aula+de+beach+tennis+para+iniciantes+com+professor+ensinando+fundamentos+na+areia",
    alt: "Aula de beach tennis para iniciantes",
    label: "Aulas",
  },
  {
    src: "https://placehold.co/800x600?text=Pôr+do+sol+sobre+as+quadras+de+areia+com+silhuetas+de+jogadores+e+cores+alaranjadas+no+ceu",
    alt: "Pôr do sol sobre as quadras de areia",
    label: "Ambiente",
  },
]

export default function Galeria() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  useEffect(() => {
    if (!lightboxOpen) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length)
      }, 3500)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [lightboxOpen])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length)

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxOpen])

  return (
    <section id="galeria" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-arena-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
            <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
              Galeria
            </span>
          </div>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white text-balance">
            Nossa <span className="text-gradient-green">Arena</span> em Fotos
          </h2>
          <p className="font-sans text-arena-white/60 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Conheça cada detalhe da estrutura e momentos especiais do nosso clube.
          </p>
        </div>

        {/* Main carousel */}
        <div className="section-fade mb-4 relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] cursor-pointer group border border-arena-border"
          onClick={() => openLightbox(activeIndex)}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                i === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arena-bg/70 via-transparent to-transparent" />
            </div>
          ))}

          {/* Label */}
          <div className="absolute bottom-6 left-6 z-10">
            <span className="font-display font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-arena-green/90 text-arena-bg">
              {images[activeIndex].label}
            </span>
          </div>

          {/* Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-arena-green/20 transition-colors opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} className="text-arena-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev + 1) % images.length)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-arena-green/20 transition-colors opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} className="text-arena-white" />
          </button>

          {/* Expand hint */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full glass text-arena-white/60 text-xs font-display tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
            Ampliar
          </div>
        </div>

        {/* Thumbnails */}
        <div className="section-fade grid grid-cols-4 sm:grid-cols-8 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 border-2 ${
                i === activeIndex
                  ? "border-arena-green scale-95 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:scale-95"
              }`}
              aria-label={`Ver foto ${i + 1}: ${img.label}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots indicator (mobile) */}
        <div className="section-fade flex justify-center gap-2 mt-6 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 h-2 bg-arena-green" : "w-2 h-2 bg-arena-white/30"
              }`}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="w-full rounded-2xl max-h-[80vh] object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-arena-surface border border-arena-border flex items-center justify-center hover:bg-arena-green/20 transition-colors"
              aria-label="Fechar lightbox"
            >
              <X size={18} className="text-arena-white" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-arena-green/20 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={22} className="text-arena-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-arena-green/20 transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={22} className="text-arena-white" />
            </button>
            <div className="text-center mt-4">
              <span className="font-display font-bold text-sm uppercase tracking-widest text-arena-green">
                {images[lightboxIndex].label}
              </span>
              <p className="font-sans text-arena-white/50 text-xs mt-1">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
