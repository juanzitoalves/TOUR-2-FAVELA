import Logo from '../assets/Logo-sem-fundo.png';

function Navbar() {
  return (
    <nav className="bg-[#1A1A1A] text-white py-2 px-6 flex items-center justify-between">
      <img src={Logo} alt="Logo Tour2Rio" className="h-16" />

      <div className="flex items-center space-x-4">
        {/* Box de idioma */}
        <button className="border border-white/30 px-4 py-1 rounded-md text-sm hover:bg-white hover:text-black transition-all duration-200">
          LAN
        </button>

        {/* Botão reservar */}
        <a href="https://wa.me/5521982952256">
          <button className="bg-white text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-300 transition-all duration-200">
            BOOK NOW
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
