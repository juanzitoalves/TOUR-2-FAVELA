import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo-sem-fundo.png";
import ReactCountryFlag from "react-country-flag";

function Navbar() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "pt", name: "PT", countryCode: "BR" },
    { code: "en", name: "EN", countryCode: "US" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <nav className="bg-[#1A1A1A] text-white py-2 px-6 flex items-center justify-between">
      {/* Logo */}
      <img src={Logo} alt="Logo Tour2Rio" className="h-16" />

      {/* Parte direita */}
      <div className="flex items-center space-x-4">
        {/* Seletor de idioma */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center border border-white/30 px-3 py-1 rounded-md text-sm 
                       hover:bg-white hover:text-black transition duration-200"
          >
            <ReactCountryFlag
              countryCode={currentLang.countryCode}
              svg
              className="w-5 h-5 mr-2"
            />
            <span className="font-medium uppercase">{currentLang.code}</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 bg-[#1A1A1A] border border-white/20 rounded-md shadow-lg z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-white hover:text-black transition duration-200 ${
                    i18n.language === lang.code ? "bg-white/10" : ""
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    className="w-5 h-5 mr-2"
                  />
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botão reservar */}
        <a
          href="https://wa.me/5521982952256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-300 transition duration-200">
            {t("reserve")}
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
