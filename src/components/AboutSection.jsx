import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
      <section className="w-full max-w-6xl bg-[#141414] text-gray-200 py-12 sm:py-16 px-6 sm:px-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-10 text-white text-center drop-shadow-lg">
          {t("about.title")}
        </h2>

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 text-center">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
          <p className="text-gray-200">{t("about.paragraph5")}</p>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
