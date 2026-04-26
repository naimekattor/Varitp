import { useState } from 'react';
import { Menu, UtensilsCrossed, X } from 'lucide-react';
import logo from "../assets/images/Varivo_LOGO_RGB_boja.png"; 
const navItems = [
  { page: 'landing', label: 'Menu' },
  { page: 'cart', label: 'Shopping cart' },
  { page: 'review', label: 'Review' },
  { page: 'contact', label: 'Contact' },
  { page: 'signup', label: 'Signup', activePages: ['auth', 'signup', 'signin'] },
];

export default function Header({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string) => void;
  currentPage: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isItemActive = (page: string, activePages?: string[]) => {
    if (activePages) {
      return activePages.includes(currentPage);
    }

    return currentPage === page;
  };

  const handleNavigate = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header className="w-full bg-white relative z-[100] shadow-[0_2px_15px_rgb(0,0,0,0.03)] border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 py-[50px] lg:py-[40px] flex items-center justify-end relative">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 text-gray-900 hover:text-[#E86F24] transition-colors p-2 -ml-2 flex items-center"
            aria-label="Open mobile menu"
          >
            <Menu size={30} strokeWidth={1.7} />
          </button>

          <div
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
  onClick={() => handleNavigate('landing')}
>
  <img
    src={logo}
    alt="Varivo Logo"
    className="h-40 lg:h-44 w-auto object-contain"
  />
</div>

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-serif font-medium text-gray-900 pr-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`transition-colors ${isItemActive(item.page, item.activePages) ? 'text-[#E86F24]' : 'hover:text-[#E86F24]'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Close mobile menu overlay"
          />

          <aside className="relative h-full w-[280px] max-w-[85vw] bg-white border-r border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.18)] px-6 py-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <button
                type="button"
                onClick={() => handleNavigate('landing')}
                className="flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E86F24] flex items-center justify-center">
                  <UtensilsCrossed size={20} strokeWidth={1.7} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold tracking-[0.24em] text-gray-900 uppercase leading-none">Varivo</span>
                  <span className="text-[8px] tracking-[0.28em] font-bold text-[#E86F24] uppercase mt-1 leading-none">Bistro</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-[#E86F24] hover:border-[#E86F24] transition-colors flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavigate(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-[15px] font-serif font-medium transition-colors ${
                    isItemActive(item.page, item.activePages)
                      ? 'bg-orange-50 text-[#E86F24]'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#E86F24]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
