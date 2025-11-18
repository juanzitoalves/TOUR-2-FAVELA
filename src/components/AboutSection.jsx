import { useTranslation } from "react-i18next";
import AboutImage from "../assets/about-image.JPG";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center px-6 lg:px-10 mt-20">
      <div className="w-full max-w-[1200px]">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Imagem */}
          <div className="w-full lg:w-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={AboutImage}
              alt="About"
              className="w-full h-[280px] sm:h-[360px] lg:h-[500px] object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex-1 text-gray-300 text-lg leading-relaxed space-y-6">

            <p className="opacity-90">{t("about.paragraph1")}</p>
            <p className="opacity-90">{t("about.paragraph2")}</p>

            <div className="border-l-4 border-white/30 pl-4 italic opacity-80">
              {t("about.paragraph3")}
            </div>

            <p className="opacity-90">{t("about.paragraph4")}</p>

            <p className="opacity-90 font-medium text-xl mt-6">
              {t("about.paragraph5")}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
