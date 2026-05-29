"use client"

import Image from "next/image"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">

      {/* Imagem */}
      <Image
        src="/images/beachtennis.png"
        alt="Arena Rio Verde"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/5" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">

        <div className="relative w-[220px] md:w-[320px] h-[220px] md:h-[320px]">

  <Image
    src="/logo.png"
    alt="Arena Rio Verde"
    fill
    priority
    className="object-contain"
  />

</div>

        <p className="mt-3 text-white/60 uppercase tracking-[0.3em] text-xs">
          Beach Sports
        </p>

        {/* Barra */}
        <div className="mt-8 w-56 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-green-500 animate-loader rounded-full" />
        </div>

      </div>
    </div>
  )
}
