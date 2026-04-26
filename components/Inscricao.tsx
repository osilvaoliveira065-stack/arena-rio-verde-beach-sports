"use client"

import { useEffect, useRef, useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from "@/lib/firebase";

const db = getFirestore(app);

const WHATSAPP_NUMBER = "5513988434687"

const modalidadesOptions = [
  { value: "", label: "Selecione uma modalidade" },
  { value: "futevolei", label: "Futevôlei" },
  { value: "beachtennis", label: "Beach Tennis" },
  { value: "beachvolley", label: "Beach Volley" },
  { value: "outros", label: "Quero conhecer o clube" },
]

export default function Inscricao() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    modalidade: "",
    mensagem: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório"
    if (!form.telefone.trim()) newErrors.telefone = "Telefone é obrigatório"
    if (!form.modalidade) newErrors.modalidade = "Selecione uma modalidade"
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    await addDoc(collection(db, "inscricoes"), {
      nome: form.nome,
      telefone: form.telefone,
      modalidade: form.modalidade,
      mensagem: form.mensagem,
      createdAt: new Date(),
    });

    console.log("Salvo no Firebase ✅");

  } catch (error) {
    console.error("Erro ao salvar:", error);
  }

    const modalidadeLabel =
      modalidadesOptions.find((m) => m.value === form.modalidade)?.label || form.modalidade

    const message = encodeURIComponent(
      `Olá! Quero me inscrever na Arena Rio Verde Beach Sports! 🏐\n\n` +
        `*Nome:* ${form.nome}\n` +
        `*Telefone:* ${form.telefone}\n` +
        `*Modalidade:* ${modalidadeLabel}\n` +
        (form.mensagem ? `*Mensagem:* ${form.mensagem}` : "")
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="inscricao" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 bg-arena-bg pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-fade visible p-12 rounded-3xl border border-arena-green/30 bg-arena-surface">
            <CheckCircle2 size={64} className="text-arena-green mx-auto mb-6" />
            <h3 className="font-display font-black text-4xl uppercase text-arena-white mb-3">
              Mensagem Enviada!
            </h3>
            <p className="font-sans text-arena-white/65 leading-relaxed mb-8">
              Você está sendo redirecionado para o WhatsApp. Em breve nossa equipe entrará em contato!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full border border-arena-green/40 text-arena-green hover:bg-arena-green/10 transition-colors"
            >
              Voltar ao formulário
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-arena-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arena-green/20 to-transparent" />
      <div className="absolute -right-40 top-1/2 w-96 h-96 rounded-full bg-arena-green/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-arena-green/30 bg-arena-green/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-green" />
              <span className="font-display text-arena-green text-xs font-semibold tracking-widest uppercase">
                Inscrição
              </span>
            </div>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none text-arena-white mb-5 text-balance">
              Comece Sua{" "}
              <span className="text-gradient-green">Jornada</span>{" "}
              Hoje
            </h2>
            <p className="font-sans text-arena-white/65 text-base sm:text-lg leading-relaxed mb-8">
              Dê o primeiro passo para transformar seu jogo. Preencha o formulário e nossa equipe
              entrará em contato pelo WhatsApp para te auxiliar com horários, valores e todas
              as informações que precisar.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-4">
              {[
                "Avaliação gratuita na primeira aula",
                "Turmas para todos os níveis",
                "Professores experientes e dedicados",
                "Horários flexíveis manhã, tarde e noite",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-arena-green/20 border border-arena-green/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-arena-green" />
                  </div>
                  <span className="font-sans text-arena-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp quick link */}
            <div className="mt-8 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-[#25D366] text-sm tracking-wide">
                  Fale diretamente pelo WhatsApp
                </p>
                <p className="font-sans text-arena-white/50 text-xs">
                  Resposta rápida em horário comercial
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="section-fade">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 sm:p-10 border border-arena-green/10"
              noValidate
            >
              <h3 className="font-display font-black text-2xl uppercase text-arena-white mb-6 tracking-wide">
                Formulário de Inscrição
              </h3>

              {/* Nome */}
              <div className="mb-5">
                <label className="block font-display text-xs font-semibold tracking-widest uppercase text-arena-white/70 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={`w-full bg-arena-bg border rounded-xl px-4 py-3.5 font-sans text-arena-white text-sm placeholder-arena-white/30 focus:outline-none focus:border-arena-green transition-colors ${
                    errors.nome ? "border-red-500/50" : "border-arena-border focus:border-arena-green/60"
                  }`}
                />
                {errors.nome && (
                  <p className="font-sans text-red-400 text-xs mt-1">{errors.nome}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="mb-5">
                <label className="block font-display text-xs font-semibold tracking-widest uppercase text-arena-white/70 mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(19) 99999-9999"
                  className={`w-full bg-arena-bg border rounded-xl px-4 py-3.5 font-sans text-arena-white text-sm placeholder-arena-white/30 focus:outline-none focus:border-arena-green transition-colors ${
                    errors.telefone ? "border-red-500/50" : "border-arena-border focus:border-arena-green/60"
                  }`}
                />
                {errors.telefone && (
                  <p className="font-sans text-red-400 text-xs mt-1">{errors.telefone}</p>
                )}
              </div>

              {/* Modalidade */}
              <div className="mb-5">
                <label className="block font-display text-xs font-semibold tracking-widest uppercase text-arena-white/70 mb-2">
                  Modalidade *
                </label>
                <select
                  id="modalidade-select"
                  name="modalidade"
                  value={form.modalidade}
                  onChange={handleChange}
                  className={`w-full bg-arena-bg border rounded-xl px-4 py-3.5 font-sans text-arena-white text-sm focus:outline-none focus:border-arena-green transition-colors appearance-none cursor-pointer ${
                    errors.modalidade ? "border-red-500/50" : "border-arena-border focus:border-arena-green/60"
                  } ${!form.modalidade ? "text-arena-white/30" : ""}`}
                >
                  {modalidadesOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-arena-surface text-arena-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.modalidade && (
                  <p className="font-sans text-red-400 text-xs mt-1">{errors.modalidade}</p>
                )}
              </div>

              {/* Mensagem */}
              <div className="mb-7">
                <label className="block font-display text-xs font-semibold tracking-widest uppercase text-arena-white/70 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Dúvidas, horários de preferência, nível de experiência..."
                  rows={3}
                  className="w-full bg-arena-bg border border-arena-border rounded-xl px-4 py-3.5 font-sans text-arena-white text-sm placeholder-arena-white/30 focus:outline-none focus:border-arena-green/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 font-display font-bold text-base uppercase tracking-widest px-6 py-4 rounded-full bg-arena-green text-arena-bg hover:bg-arena-green-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] green-glow"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-arena-bg flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pelo WhatsApp
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="font-sans text-arena-white/35 text-xs text-center mt-4 leading-relaxed">
                Ao clicar, você será redirecionado ao WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
