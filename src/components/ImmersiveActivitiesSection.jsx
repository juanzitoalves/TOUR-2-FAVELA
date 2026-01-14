import { useTranslation } from "react-i18next";

// Importando imagens
import projetos from "../assets/DSCN3007.JPG";
import passeio from "../assets/DSCN3096.JPG";
import comidaImg from "../assets/about-image.JPG";
import oficina from "../assets/hero-image.jpg";

function ImmersiveActivitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 py-14 lg:px-10 bg-transparent">
      <h2 className="text-center sm:text-5xl text-4xl font-semibold text-white mb-10 drop-shadow-lg">
        {t("immersive.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Passeios guiados */}
        <div
          className="rounded-2xl overflow-hidden
                     bg-white/10 backdrop-blur-md
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 ease-out
                     hover:scale-[1.04] hover:shadow-2xl hover:border-white/40"
        >
          <img
            src={passeio}
            alt={t("immersive.tour.title")}
            className="w-full h-64 object-cover
                       transition-all duration-300
                       hover:brightness-110"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              {t("immersive.tour.title")}
            </h3>
            <p>{t("immersive.tour.description")}</p>
          </div>
        </div>

        {/* Oficinas culturais */}
        <div
          className="rounded-2xl overflow-hidden
                     bg-white/10 backdrop-blur-md
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 ease-out
                     hover:scale-[1.04] hover:shadow-2xl hover:border-white/40"
        >
          <img
            src={oficina}
            alt={t("immersive.workshops.title")}
            className="w-full h-64 object-cover
                       transition-all duration-300
                       hover:brightness-110"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              {t("immersive.workshops.title")}
            </h3>
            <p>{t("immersive.workshops.description")}</p>
          </div>
        </div>

        {/* Experiências gastronômicas */}
        <div
          className="rounded-2xl overflow-hidden
                     bg-white/10 backdrop-blur-md
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 ease-out
                     hover:scale-[1.04] hover:shadow-2xl hover:border-white/40"
        >
          <img
            src={comidaImg}
            alt={t("immersive.food.title")}
            className="w-full h-64 object-cover
                       transition-all duration-300
                       hover:brightness-110"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              {t("immersive.food.title")}
            </h3>
            <p>{t("immersive.food.description")}</p>
          </div>
        </div>

        {/* Projetos sociais */}
        <div
          className="rounded-2xl overflow-hidden
                     bg-white/10 backdrop-blur-md
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 ease-out
                     hover:scale-[1.04] hover:shadow-2xl hover:border-white/40"
        >
          <img
            src={projetos}
            alt={t("immersive.social.title")}
            className="w-full h-64 object-cover
                       transition-all duration-300
                       hover:brightness-110"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              {t("immersive.social.title")}
            </h3>
            <p>{t("immersive.social.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImmersiveActivitiesSection;
