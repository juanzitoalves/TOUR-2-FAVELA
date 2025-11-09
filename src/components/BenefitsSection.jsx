import { useTranslation } from "react-i18next";

function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full text-white py-20 px-6 sm:px-10 md:px-20 flex flex-col items-center">
      {/* -------- BENEFÍCIOS -------- */}
      <h2 className="text-white/90 text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-center">
        {t("Benefits")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left max-w-4xl w-full text-white/80 text-base">
        <p className="hover:text-white transition">• {t("localGuide")}</p>
        <p className="hover:text-white transition">• {t("urbanArt")}</p>
        <p className="hover:text-white transition">• {t("ViewPoints")}</p>
        <p className="hover:text-white transition">• {t("hours")}</p>
      </div>

      {/* Divider */}
      <div className="w-32 h-[1px] bg-white/20 my-14"></div>

      {/* -------- INCLUSO -------- */}
      <h2 className="text-white/90 text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-center">
        {t("Included")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-center sm:text-left max-w-4xl w-full text-white/80 text-base">
        <p className="hover:text-white transition">• {t("transportation")}</p>
        <p className="hover:text-white transition">• {t("guia")}</p>
        <p className="hover:text-white transition">• {t("photos")}</p>
        <p className="hover:text-white transition">• {t("visits")}</p>
      </div>
    </section>
  );
}

export default BenefitsSection;
