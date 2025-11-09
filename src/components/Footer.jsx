import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-center text-white py-4 mt-10 text-sm">
      <p>
        © {new Date().getFullYear()} TourForReal. {t("allRightsReserved")}
      </p>
    </footer>
  );
}

export default Footer;
