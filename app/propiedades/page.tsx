"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HamburgerButton } from "@/components/hamburger-button"
import { MobileMenu } from "@/components/mobile-menu"
import { MapPin, Bed, Bath, Car, Ruler } from "lucide-react"
import { properties } from "@/lib/properties" // Importar las propiedades desde el archivo compartido

export default function PropiedadesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedCountry, setSelectedCountry] = useState("todos")
  const [priceRange, setPriceRange] = useState("todos")

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "todos" || property.category === selectedCategory
    const matchesCountry = selectedCountry === "todos" || property.country === selectedCountry
    const matchesPrice =
      priceRange === "todos" ||
      (priceRange === "bajo" && property.price < 150000) ||
      (priceRange === "medio" && property.price >= 150000 && property.price < 250000) ||
      (priceRange === "alto" && property.price >= 250000)

    return matchesSearch && matchesCategory && matchesCountry && matchesPrice
  })

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
              <Link
                href="/#contacto"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Contacto
              </Link>
            </nav>

            <HamburgerButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <main role="main">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-red-600 font-poppins transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.5 6c0-.26.25-.5.5-.5h5.25a.75.75 0 010 1.5h-5.25a.75.75 0 01-.5-.5zm1.5 9a.75.75 0 000 1.5h5.25a.75.75 0 000-1.5h-5.25z"
                clipRule="evenodd"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>

        {/* Page Header */}
        <section className="py-8 sm:py-12 bg-gray-50" aria-labelledby="page-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                id="page-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton font-bold text-gray-900 mb-4 sm:mb-6"
              >
                NUESTRAS PROPIEDADES
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-600 leading-relaxed">
                Descubre nuestra selección exclusiva de propiedades en las mejores ubicaciones de Ecuador y el
                extranjero.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 sm:py-8 bg-white border-b" aria-label="Filtros de búsqueda">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Search */}
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5"
                    aria-hidden="true"
                  >
                    <path d="M21.752 15.091l-6.183 6.183a4.5 4.5 0 01-6.364 0l-6.183-6.183a4.5 4.5 0 010-6.364l6.183-6.183A4.5 4.5 0 017.364 4.5h13.672a4.5 4.5 0 014.5 4.5v13.672a4.5 4.5 0 01-4.5 4.5zm-2.625-2.625a1.5 1.5 0 001.066-2.066l1.903-1.903a3 3 0 00-4.242-4.242l-1.903 1.903a1.5 1.5 0 00-2.066 1.066l-1.903-1.903a3 3 0 00-4.242 4.242l1.903 1.903a1.5 1.5 0 001.066 2.066l1.903 1.903a3 3 0 004.242 0l1.903-1.903z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar propiedades..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-poppins text-sm sm:text-base"
                    aria-label="Buscar propiedades por nombre o ubicación"
                  />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-poppins text-sm sm:text-base"
                    aria-label="Filtrar por categoría"
                  >
                    <option value="todos">Todas las categorías</option>
                    <option value="destacado">Destacados</option>
                    <option value="internacional">Internacional</option>
                    <option value="lujo">Lujo</option>
                    <option value="comercial">Comercial</option>
                  </select>

                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-poppins text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                    aria-label="Filtrar por país"
                  >
                    <option value="todos">Todos los países</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Panamá">Panamá</option>
                    <option value="Estados Unidos">Estados Unidos</option> {/* Added Estados Unidos */}
                  </select>

                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-poppins text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                    aria-label="Filtrar por rango de precio"
                  >
                    <option value="todos">Todos los precios</option>
                    <option value="bajo">Hasta $150,000</option>
                    <option value="medio">$150,000 - $250,000</option>
                    <option value="alto">Más de $250,000</option>
                  </select>
                </div>

                <div className="text-center">
                  <p className="font-poppins text-gray-600 text-sm sm:text-base">
                    Mostrando {filteredProperties.length} de {properties.length} propiedades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-8 sm:py-12" aria-label="Lista de propiedades">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative w-full h-60">
                      <Image
                        src={property.images[0] || "/placeholder.svg"}
                        alt={property.name}
                        fill
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-2xl font-poppins font-semibold text-gray-800">
                        {property.name}
                      </CardTitle>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-600" /> {property.location}
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <p className="text-3xl font-bold text-red-600 mb-4">{property.price}</p>
                      <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                          <Ruler className="w-4 h-4 text-gray-500" /> {property.area}
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-gray-500" /> {property.bedrooms} Habitaciones
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-gray-500" /> {property.bathrooms} Baños
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-gray-500" /> {property.parking} Parqueos
                        </div>
                      </div>
                      <p className="text-gray-700 mt-4 line-clamp-3">{property.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 border-t flex justify-end">
                      <Link href={`/propiedades/${property.id}`} passHref>
                        <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                          Ver Detalles
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 sm:w-16 h-12 sm:h-16 mx-auto"
                      aria-hidden="true"
                    >
                      <path d="M10 15.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm1 5a5 5 0 01-5-5v-1a1 1 0 011-1h10a1 1 0 011 1v1a5 5 0 01-5 5zm11-11H3v9a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2h6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-anton font-bold text-gray-900 mb-2">
                    No se encontraron propiedades
                  </h3>
                  <p className="font-poppins text-gray-600 text-sm sm:text-base">
                    Intenta ajustar los filtros para encontrar más opciones.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-red-600" aria-labelledby="cta-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2
                id="cta-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-anton font-bold text-white mb-4 sm:mb-6"
              >
                ¿NO ENCONTRASTE LO QUE BUSCAS?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-poppins text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Contáctame y te ayudo a encontrar la propiedad perfecta según tus necesidades específicas.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors">
                <Link href="https://wa.me/593987167782?text=Hola Janneth, me interesa conocer más sobre tus propiedades. ¿Podrías ayudarme?">
                  CONTACTAR AHORA
                </Link>
              </Button>
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
                  <p>📧 jannethaguirrecontacto@gmail.com</p>
                  <p>📱 +593 98 716 7782</p>
                  <p>📍 Guayaquil, Ecuador</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-anton font-bold mb-3 sm:mb-4">SÍGUENOS</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
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
