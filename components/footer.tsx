"use client"

import { MapPin, Instagram, ArrowUp } from "lucide-react"

const WHATSAPP_NUMBER = "5513988434687"
const INSTAGRAM_URL = "https://instagram.com/arenariverdebeachsports"

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Bar & Lazer", href: "#bar" },
  { label: "Novidades", href: "#novidades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Inscrição", href: "#inscricao" },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative bg-arena-bg border-t border-arena-border overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-arena-green/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" width="50" />
              <div>
                <p className="font-display text-arena-green font-bold text-lg tracking-wider uppercase leading-none">
                  Arena Rio Verde
                </p>
                <p className="font-display text-arena-white/50 text-xs tracking-widest uppercase leading-none mt-0.5">
                  Beach Sports
                </p>
              </div>
            </div>
            <p className="font-sans text-arena-white/55 text-sm leading-relaxed max-w-sm mb-5">
              O melhor espaço para Futevôlei, Beach Tennis e Beach Volley em Pirassununga/SP.
              Estrutura completa, professores qualificados e uma comunidade apaixonada pelo esporte.
            </p>
            <div className="flex items-center gap-1 text-arena-white/50 text-sm font-sans">
              <MapPin size={14} className="text-arena-green flex-shrink-0" />
              <span>Rua Maria C. M. Belloni, 244 — Pirassununga/SP</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-arena-white mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-sans text-arena-white/55 text-sm hover:text-arena-green transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-arena-white mb-4">
              Contato & Redes
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-sans text-arena-white/60 text-sm group-hover:text-arena-green transition-colors">
                  (13) 9 8843-4687
                </span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Instagram size={16} className="text-pink-400" />
                </div>
                <span className="font-sans text-arena-white/60 text-sm group-hover:text-pink-400 transition-colors">
                  @arenariverdebeachsports
                </span>
              </a>

              {/* CTA */}
              <button
                onClick={() => handleNav("#inscricao")}
                className="mt-4 w-full font-display font-bold text-xs uppercase tracking-widest px-4 py-3 rounded-xl bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 green-glow-sm text-center"
              >
                Inscreva-se Agora
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-arena-border mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-arena-white/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Arena Rio Verde Beach Sports. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-arena-border flex items-center justify-center hover:border-arena-green hover:text-arena-green text-arena-white/40 transition-all duration-300 hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
