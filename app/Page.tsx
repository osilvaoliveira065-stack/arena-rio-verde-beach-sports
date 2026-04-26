import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Modalidades from "@/components/Modalidades"
import Galeria from "@/components/Galeria"
import Bar from "@/components/Bar"
import Inscricao from "@/components/Inscricao"
import Novidades from "@/components/Novidades"
import Localizacao from "@/components/Localizacao"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/Whatsappbutton"

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
