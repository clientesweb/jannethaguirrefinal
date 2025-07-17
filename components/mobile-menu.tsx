"use client"
import Link from "next/link"
import { X } from "lucide-react"
import { useEffect } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} aria-hidden="true" />

      {/* Menu */}
      <div
        id="mobile-menu"
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 id="mobile-menu-title" className="text-lg sm:text-xl font-anton font-bold text-gray-900">
              MENÚ
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Cerrar menú"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4 sm:py-6" role="navigation" aria-label="Navegación móvil">
            <div className="space-y-1">
              <Link
                href="/nosotros"
                onClick={onClose}
                className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-4 border-transparent hover:border-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 focus:border-red-600"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                onClick={onClose}
                className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-4 border-transparent hover:border-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 focus:border-red-600"
              >
                Servicios
              </Link>
              <Link
                href="/propiedades"
                onClick={onClose}
                className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-4 border-transparent hover:border-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 focus:border-red-600"
              >
                Propiedades
              </Link>
              <Link
                href="#contacto"
                onClick={onClose}
                className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-4 border-transparent hover:border-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 focus:border-red-600"
              >
                Contacto
              </Link>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="p-4 sm:p-6 bg-gray-50 border-t">
            <h3 className="text-base sm:text-lg font-anton font-bold text-gray-900 mb-3 sm:mb-4">CONTACTO</h3>
            <div className="space-y-2 text-sm font-poppins text-gray-600">
              <p>📧 info@jannethaguirre.com</p>
              <p>📱 +593 (0) 99 123 4567</p>
              <p>📍 Guayaquil, Ecuador</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
