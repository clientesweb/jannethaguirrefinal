"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const announcements = [
  "🏆 Embajadora de Ecuador - Congreso Internacional de Mujeres 2025",
  "🌟 20+ años de experiencia - Tu experta de confianza en bienes raíces",
  "🏠 Propiedades en Guayaquil, Samborondón y costa ecuatoriana",
  "💼 Certificada NAR, CRS, FENACBRE y CAINEC",
]

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-red-600 text-white py-2 sm:py-3 px-4 relative overflow-hidden" role="banner" aria-live="polite">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="font-poppins text-xs sm:text-sm md:text-base font-medium leading-tight px-8 sm:px-0">
            {announcements[currentIndex]}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 sm:ml-4 p-1 hover:bg-red-700 rounded transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
          aria-label="Cerrar anuncio"
        >
          <X className="w-3 sm:w-4 h-3 sm:h-4" />
        </button>
      </div>
    </div>
  )
}
