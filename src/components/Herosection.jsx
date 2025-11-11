import { useTranslation } from "react-i18next";
import HeroImage from "../assets/hero-image.jpg";

function Herosection() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center px-4 py-6">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Imagem principal */}
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-[180px] sm:h-[260px] md:h-[350px] lg:h-[450px] xl:h-[550px] object-cover rounded-xl brightness-75"
        />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            {t("welcome")}
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg mt-2 drop-shadow-lg">
            {t("subtitle")}
          </p>

          {/* Botão */}
          <a
            href="https://wa.me/5521982952256"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg text-sm sm:text-base shadow-md hover:bg-gray-200 transition duration-200"
          >
            {t("reserve")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
