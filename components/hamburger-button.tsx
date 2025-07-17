"use client"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="w-5 sm:w-6 h-5 sm:h-6 flex flex-col justify-center items-center relative">
        <span
          className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
          }`}
        />
        <span
          className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}
        />
      </div>
    </button>
  )
}
