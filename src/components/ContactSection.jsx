import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo-sem-fundo.png";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[#141414] min-h-[400px] flex flex-col justify-center items-center rounded-xl 
                 w-[90%] md:w-[83%] lg:w-[83%] mx-auto text-center my-16 shadow-lg py-10"
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4"
      />

      {/* Título traduzido */}
      <h2 className="text-2xl font-semibold text-white mb-6">
        {t("contact")}
      </h2>

      {/* Ícones */}
      <div className="flex justify-center gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/tour2favela/m"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl
                     bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400
                     transition-transform duration-300 hover:scale-110 hover:opacity-90"
        >
          <FaInstagram />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5521982952256"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl
                     bg-green-500 transition-transform duration-300 hover:scale-110 hover:bg-green-600 hover:opacity-90"
        >
          <FaWhatsapp />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@tours2rio"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl
                     bg-[#010101] transition-transform duration-300 hover:scale-110 hover:opacity-90"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;