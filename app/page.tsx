import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Sobre from "@/components/sobre"
import Modalidades from "@/components/modalidades"
import Galeria from "@/components/galeria"
import Bar from "@/components/bar"
import Inscricao from "@/components/inscricao"
import Novidades from "@/components/novidades"
import Localizacao from "@/components/localizacao"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="bg-arena-bg text-arena-white">
      <Navbar />
      <Hero />
      <Sobre />
      <Modalidades />
      <Galeria />
      <Bar />
      <Inscricao />
      <Novidades />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
