import { Star, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function TripAdvisorFloatingButton() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <a
      href="https://www.tripadvisor.com.br/Attraction_Review-g303506-d33344285-Reviews-Tour2Rio-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TripAdvisor Reviews"
      className={`
        fixed
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        z-50
        flex items-center gap-2
        bg-[#00aa6c] hover:bg-[#008a57]
        text-white
        px-3 py-2 sm:px-4 sm:py-3
        rounded-full
        shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-105
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Icon */}
      <Star className="w-4 h-4 fill-white sm:w-5 sm:h-5" />

      {/* Mobile label */}
      <span className="sm:hidden text-xs font-semibold">
        Reviews
      </span>

      {/* Desktop text */}
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        {t("tripadvisor.floating")}
      </span>
    </a>
  );
}