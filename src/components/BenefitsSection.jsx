function BenefitsSection() {
  return (
    <section className="w-full text-white py-20 px-6 sm:px-10 md:px-20 flex flex-col items-center">

      {/* -------- BENEFÍCIOS -------- */}
      <h2 className="text-white/90 text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-center">
        Benefícios do Passeio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left max-w-4xl w-full text-white/80 text-base">
        <p className="hover:text-white transition">• Guia local experiente</p>
        <p className="hover:text-white transition">• Arte urbana e Cultura</p>
        <p className="hover:text-white transition">• Vista panorâmica da favela</p>
        <p className="hover:text-white transition">• 2h de total imersão</p>
      </div>

      {/* Divider */}
      <div className="w-32 h-[1px] bg-white/20 my-14"></div>

      {/* -------- INCLUSO -------- */}
      <h2 className="text-white/90 text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-center">
        O Que Está Incluso
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left max-w-4xl w-full text-white/80 text-base">
        <p className="hover:text-white transition">• Transporte</p>
        <p className="hover:text-white transition">• Guia bilíngue</p>
        <p className="hover:text-white transition">• Paradas para fotos</p>
        <p className="hover:text-white transition">• Visita a pontos históricos</p>
      </div>

    </section>
  );
}

export default BenefitsSection;
