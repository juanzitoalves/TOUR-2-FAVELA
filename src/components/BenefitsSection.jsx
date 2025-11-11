import { useTranslation } from "react-i18next";

function BenefitsSection() {
  const { t } = useTranslation();

  // Listas separadas para fácil manutenção
  const benefits = [
    "localGuide",
    "urbanArt",
    "ViewPoints",
    "hours",
  ];

  const included = [
    "transportation",
    "guia",
    "photos",
    "visits",
  ];

  return (
    <section className="w-full text-white py-20 px-6 md:px-20 flex flex-col items-center">
      {/* -------- BENEFÍCIOS -------- */}
      <h2 className="text-white/90 text-3xl font-semibold tracking-wide mb-6 text-center">
        {t("Benefits")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left 
                      max-w-4xl mx-auto text-white/80 text-base">
        {benefits.map((key) => (
          <p key={key} className="hover:text-white transition">• {t(key)}</p>
        ))}
      </div>

      {/* Divider */}
      <div className="w-32 h-px bg-white/20 my-14" />

      {/* -------- INCLUSO -------- */}
      <h2 className="text-white/90 text-3xl font-semibold tracking-wide mb-6 text-center">
        {t("Included")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left 
                      max-w-4xl mx-auto text-white/80 text-base">
        {included.map((key) => (
          <p key={key} className="hover:text-white transition">• {t(key)}</p>
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
