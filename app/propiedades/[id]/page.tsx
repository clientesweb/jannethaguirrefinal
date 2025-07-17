"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Car,
  Phone,
  Mail,
  Share2,
  ChevronLeft,
  ChevronRight,
  Ruler,
  CheckCircle,
  DollarSign,
} from "lucide-react"
import { notFound } from "next/navigation"
import { properties } from "@/lib/properties"

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30" role="banner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" aria-label="Ir al inicio - Janneth Aguirre Bienes Raíces">
                <Image
                  src="/images/logo-janneth-aguirre.webp"
                  alt="Janneth Aguirre Bienes Raíces"
                  width={200}
                  height={80}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              role="navigation"
              aria-label="Navegación principal"
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Nosotros
              </Link>
              <Link
                href="/propiedades"
                className="text-red-600 font-poppins font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Propiedades
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main role="main">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            href="/propiedades"
            className="inline-flex items-center text-gray-600 hover:text-red-600 font-poppins transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Volver a propiedades
          </Link>
        </div>

        {/* Property Images Gallery */}
        <section className="pb-6 sm:pb-8" aria-label="Galería de imágenes de la propiedad">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 sm:h-80 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${property.name} - Imagen ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-poppins">
                  {currentImageIndex + 1}/{property.images.length}
                </div>

                {/* Share Button */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/90 hover:bg-white border-0 text-gray-700 hover:text-gray-900 backdrop-blur-sm"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: property.name,
                          text: property.description,
                          url: window.location.href,
                        })
                      }
                    }}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>

              {/* Image Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {property.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index ? "border-red-600" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${property.name} - Miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                      <div className="flex-1">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-anton font-bold text-gray-900 mb-2">
                          {property.name}
                        </h1>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                          <span className="font-poppins text-sm sm:text-base">{property.location}</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-anton font-bold text-red-600">
                          {property.priceType} ${property.price.toLocaleString()}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 font-poppins">USD</div>
                      </div>
                    </div>

                    {/* Property Stats */}
                    <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 p-4 bg-gray-50 rounded-lg">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-gray-500" />
                          <span className="font-poppins font-medium text-sm sm:text-base">
                            {property.bedrooms} Dormitorios
                          </span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-gray-500" />
                        <span className="font-poppins font-medium text-sm sm:text-base">
                          {property.bathrooms} Baños
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Ruler className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-gray-500" />
                        <span className="font-poppins font-medium text-sm sm:text-base">{property.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-gray-500" />
                        <span className="font-poppins font-medium text-sm sm:text-base">
                          {property.parking} Estacionamiento
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-3 sm:mb-4">DESCRIPCIÓN</h2>
                    <p className="font-poppins text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                      {property.description}
                    </p>
                    <p className="font-poppins text-gray-600 leading-relaxed text-sm sm:text-base">
                      {property.longDescription}
                    </p>
                  </div>

                  {/* Location Map */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-3 sm:mb-4">UBICACIÓN</h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-5 h-5 text-red-600 mr-2" />
                        <span className="font-poppins font-medium text-gray-900">{property.location}</span>
                      </div>
                      <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
                        {property.id === "departamentos-isla-mocoli" ? (
                          <Image
                            src="/images/isla-mocoli-map.png"
                            alt="Ubicación del proyecto en Isla Mocolí - Mapa con ubicación exacta Km 6"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 66vw"
                          />
                        ) : property.id === "departamento-samborondon" ||
                          property.id === "departamentos-exclusivos-en-samborondon" ||
                          property.id === "locales-comerciales-consultorios-samborondon" ? (
                          <Image
                            src="/images/samborondon-location-map.png"
                            alt="Ubicación del proyecto en Samborondón - Mapa con ubicación exacta"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 66vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                              <p className="font-poppins text-gray-500 text-sm">Mapa de ubicación</p>
                              <p className="font-poppins text-gray-400 text-xs">{property.location}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="font-poppins text-gray-600 text-sm mt-3">
                        Ubicación estratégica en {property.location}, una de las zonas de mayor plusvalía de{" "}
                        {property.country}, con fácil acceso a centros comerciales, restaurantes y servicios.
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-3 sm:mb-4">
                      CARACTERÍSTICAS
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {property.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="font-poppins text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-3 sm:mb-4">
                      ESPECIFICACIONES
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {Object.entries(property.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                            <span className="font-poppins font-medium text-gray-700 text-sm sm:text-base">{key}:</span>
                            <span className="font-poppins text-gray-900 text-sm sm:text-base">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Financing */}
                  {property.financing && (
                    <div>
                      <h2 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-3 sm:mb-4">
                        {property.financing.title}
                      </h2>
                      <div className="bg-red-50 rounded-lg p-4 sm:p-6">
                        <div className="space-y-4">
                          {property.financing.options.map((option: string, index: number) => (
                            <div key={index} className="flex items-start">
                              <DollarSign className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="font-poppins text-gray-700 text-sm sm:text-base font-medium">
                                {option}
                              </span>
                            </div>
                          ))}
                          <div className="mt-4 pt-4 border-t border-red-200">
                            <p className="font-poppins text-gray-600 text-sm">{property.financing.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-8">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl font-anton font-bold text-gray-900">
                        CONTACTAR AGENTE
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-6">
                        <Image
                          src="/images/janneth-aguirre-inmo-peru-1.webp"
                          alt="Janneth Aguirre - Agente inmobiliario"
                          width={60}
                          height={60}
                          className="rounded-full mr-4 w-12 h-12 sm:w-15 sm:h-15"
                        />
                        <div>
                          <h4 className="font-poppins font-semibold text-gray-900 text-sm sm:text-base">
                            Janneth Aguirre
                          </h4>
                          <p className="font-poppins text-xs sm:text-sm text-gray-600">Agente Inmobiliario</p>
                          <p className="font-poppins text-xs sm:text-sm text-gray-600">20+ años de experiencia</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <Link
                          href={`https://wa.me/593987167782?text=${encodeURIComponent(`Hola Janneth, me interesa la propiedad "${property.name}" ubicada en ${property.location}. ¿Podrías darme más información y agendar una visita?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                            <Phone className="w-5 h-5" /> Llamar por WhatsApp
                          </Button>
                        </Link>
                        <Link
                          href={`https://wa.me/593987167782?text=${encodeURIComponent(`Hola Janneth, me interesa recibir más información sobre "${property.name}" por correo electrónico. ¿Podrías enviarme el brochure completo?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                            <Mail className="w-5 h-5" /> Solicitar Info por Email
                          </Button>
                        </Link>
                        <Link
                          href={`https://wa.me/593987167782?text=${encodeURIComponent(`Hola Janneth, me interesa la propiedad "${property.name}" (${property.priceType} $${property.price.toLocaleString()}). ¿Podríamos conversar sobre las opciones de financiamiento y agendar una cita?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                            <Phone className="w-5 h-5" /> Consultar Financiamiento
                          </Button>
                        </Link>
                      </div>

                      <div className="text-center text-xs sm:text-sm text-gray-500 font-poppins">
                        <p>📱 +593 98 716 7782</p>
                        <p>📧 info@jannethaguirrebienesraices.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <Image
                  src="/images/logo-janneth-aguirre.webp"
                  alt="Janneth Aguirre Bienes Raíces"
                  width={200}
                  height={80}
                  className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 brightness-0 invert"
                />
                <p className="font-poppins text-gray-300 text-sm sm:text-base leading-relaxed">
                  Tu experta en bienes raíces de confianza. Encuentra tu hogar ideal o realiza la mejor inversión.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-anton font-bold mb-3 sm:mb-4">CONTACTO</h3>
                <div className="space-y-2 font-poppins text-gray-300 text-sm sm:text-base">
                  <p>🌐 www.jannethaguirre.online</p>
                  <p>📧 info@jannethaguirrebienesraices.com</p>
                  <p>📱 +593 98 716 7782</p>
                  <p>📍 Guayaquil, Ecuador</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-anton font-bold mb-3 sm:mb-4">SÍGUENOS</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://www.instagram.com/janneth_aguirrem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/jannethaguirrebienesraices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/janneth-aguirre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
              <p className="font-poppins text-gray-400 text-xs sm:text-sm">
                © 2024 Janneth Aguirre Bienes Raíces. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
