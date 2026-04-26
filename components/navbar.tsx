"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Bar & Lazer", href: "#bar" },
  { label: "Novidades", href: "#novidades" },
  { label: "Localização", href: "#localizacao" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-black/30" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3 group"
          aria-label="Arena Rio Verde - Início"
        >
          <img src="/logo.png" width="50" />
          
  <div className="leading-none">
    <p className="font-display text-arena-green font-bold text-lg tracking-wider uppercase leading-none">
      Arena Rio Verde
    </p>
    <p className="font-display text-arena-white/70 text-xs tracking-widest uppercase leading-none mt-0.5">
      Beach Sports
    </p>
  </div>
</button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative font-display text-sm font-medium tracking-wider uppercase px-3 py-2 transition-colors duration-200 rounded-md group ${
                activeSection === link.href.slice(1)
                  ? "text-arena-green"
                  : "text-arena-white/70 hover:text-arena-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-1 left-3 right-3 h-px bg-arena-green rounded-full transition-transform duration-300 origin-left ${
                  activeSection === link.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNav("#inscricao")}
            className="font-display font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 green-glow-sm hover:scale-105 active:scale-95"
          >
            Inscreva-se
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-arena-white/80 hover:text-arena-green transition-colors"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-nav border-t border-arena-border px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-display text-base font-semibold tracking-wider uppercase text-left px-3 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-arena-green bg-arena-green/10"
                  : "text-arena-white/80 hover:text-arena-green hover:bg-arena-green/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#inscricao")}
            className="mt-3 font-display font-bold text-sm uppercase tracking-widest px-5 py-3 rounded-full bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 text-center"
          >
            Inscreva-se Agora
          </button>
        </div>
      </div>
    </header>
  )
}
