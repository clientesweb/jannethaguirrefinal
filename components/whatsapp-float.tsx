"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)

  const phoneNumber = "593987167782" // +593 98 257 3799
  const message = "Hola Janneth, me interesa conocer más sobre tus servicios inmobiliarios. ¿Podrías ayudarme?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Card */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-72 sm:w-80 animate-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 text-sm">Janneth Aguirre</h4>
                    <p className="font-poppins text-xs text-gray-500">Agente Inmobiliario</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="font-poppins text-sm text-gray-700">
                    ¡Hola! 👋 Soy Janneth Aguirre, tu experta en bienes raíces.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="font-poppins text-sm text-gray-700">
                    ¿En qué puedo ayudarte hoy? Estoy aquí para resolver todas tus dudas inmobiliarias.
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold py-3 px-4 rounded-lg transition-colors text-sm flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Iniciar Conversación
              </button>

              <p className="text-center font-poppins text-xs text-gray-500 mt-2">Respuesta típica en pocos minutos</p>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
            aria-label="Abrir chat de WhatsApp"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-poppins font-bold animate-pulse">
            1
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </>
  )
}
