"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Navigation2, Phone } from "lucide-react"

const horarios = [
  { dia: "Segunda a Sexta", horario: "07h às 22h" },
  { dia: "Sábado", horario: "08h às 20h" },
  { dia: "Domingo e Feriados", horario: "08h às 14h" },
]

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.8374278267!2d-47.4267!3d-21.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU5JzU2LjQiUyA0N8KwMjUnMzYuMSJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"

const MAPS_LINK =
  "https://www.google.com/maps/search/Rua+Maria+Conceição+Marcomini+Belloni,+244,+Pirassununga,+SP"

export default function Localizacao() {
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
    <section id="localizacao" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-arena-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
            <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
              Localização
            </span>
          </div>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white text-balance">
            Venha nos <span className="text-gradient-green">Visitar</span>
          </h2>
          <p className="font-sans text-arena-white/60 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Estamos localizados no coração de Pirassununga, de fácil acesso e com estacionamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Map */}
          <div className="section-fade lg:col-span-3 rounded-3xl overflow-hidden border border-arena-border h-80 sm:h-96 relative group">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(155deg) saturate(0.5)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Arena Rio Verde Beach Sports"
              className="w-full h-full"
            />
            {/* Overlay to prevent accidental click-out */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 font-display font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 shadow-lg"
              aria-label="Abrir no Google Maps"
            >
              <Navigation2 size={14} />
              Como Chegar
            </a>
          </div>

          {/* Info panel */}
          <div className="section-fade lg:col-span-2 flex flex-col gap-4">
            {/* Address */}
            <div className="glass rounded-2xl p-6 border border-arena-green/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-arena-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-arena-green" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm uppercase tracking-wider text-arena-white mb-1">
                    Endereço
                  </p>
                  <p className="font-sans text-arena-white/70 text-sm leading-relaxed">
                    Rua Maria Conceição Marcomini Belloni, 244
                    <br />
                    Pirassununga / SP
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 font-display text-xs text-arena-green font-semibold uppercase tracking-wider hover:text-arena-green-light transition-colors"
                  >
                    <Navigation2 size={12} />
                    Abrir no Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-6 border border-arena-green/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-arena-green/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-arena-green" />
                </div>
                <p className="font-display font-bold text-sm uppercase tracking-wider text-arena-white">
                  Horário de Funcionamento
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {horarios.map((h, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-sans text-arena-white/60 text-sm">{h.dia}</span>
                    <span className="font-display font-semibold text-sm text-arena-green tracking-wide">
                      {h.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="glass rounded-2xl p-6 border border-arena-green/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-arena-green/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-arena-green" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm uppercase tracking-wider text-arena-white mb-0.5">
                    Contato
                  </p>
                  <a
                    href="https://wa.me/5519999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-arena-white/70 text-sm hover:text-arena-green transition-colors"
                  >
                    (19) 9 9999-9999
                  </a>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 font-display font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-2xl bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] green-glow-sm"
            >
              <Navigation2 size={16} />
              Como Chegar — Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
