"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { MobileMenu } from "@/components/mobile-menu"
import { HamburgerButton } from "@/components/hamburger-button"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import {
  MapPin,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  LinkIcon,
} from "lucide-react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const certificationsLogos = [
    { src: "/images/logo-c2.png", alt: "National Association of Realtors" },
    { src: "/images/logo-c5.png", alt: "Certified Residential Specialist" },
    { src: "/images/logo-c3.png", alt: "FENACBRE" },
    { src: "/images/logo-c1.png", alt: "ACBIR Guayas" },
    { src: "/images/logo-c4.png", alt: "CILA" },
    { src: "/images/logo-c6.png", alt: "Certificación Adicional" },
    { src: "/images/logo-vemas.png", alt: "VeMás - Pensamos Ciudad" },
    { src: "/images/logo-tablero-inmobiliario.png", alt: "Tablero Inmobiliario Fernando Velarde" },
  ]

  // Duplicate the logos once for a seamless infinite scroll
  const infiniteLogos = [...certificationsLogos, ...certificationsLogos]

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Saltar al contenido principal
      </a>

      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30" role="banner">
        <div className="container mx-auto container-responsive py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" aria-label="Ir al inicio - Janneth Aguirre Bienes Raíces">
                <Image
                  src="/images/logo-navidad.webp"
                  alt="Janneth Aguirre Bienes Raíces - Navidad"
                  width={200}
                  height={80}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              role="navigation"
              aria-label="Navegación principal"
            >
              <Link
                href="/nosotros"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Servicios
              </Link>
              <Link
                href="/propiedades"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Propiedades
              </Link>
              <Link
                href="#contacto"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Contacto
              </Link>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-4 xl:px-6 py-2 font-poppins font-semibold rounded-lg transition-colors text-sm xl:text-base"
                aria-label="Solicitar consulta gratuita"
              >
                Consulta Gratis
              </Button>
            </nav>

            {/* Mobile Hamburger Button */}
            <HamburgerButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section - AWARENESS */}
        <section className="w-full" aria-label="Imagen principal - Encuentra tu hogar ideal">
          <div className="w-full">
            <Image
              src="/images/encuentra-tu-hogar-ideal.webp"
              alt="¡Encuentra tu hogar ideal! - Promoción navideña de propiedades Janneth Aguirre"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* About Janneth Banner - NEW */}
        <section className="w-full" aria-label="Conoce más sobre Janneth Aguirre">
          <Link href="/nosotros" className="block w-full hover:opacity-95 transition-opacity">
            <Image
              src="/images/sobre-janneth-aguirre-new.webp"
              alt="Janneth Aguirre - Embajadora de Ecuador en el 3° Congreso Internacional de Mujeres 2025 en Lima, Perú"
              width={1920}
              height={600}
              className="w-full h-auto"
              sizes="100vw"
            />
          </Link>
        </section>

        {/* Featured Properties Section - CONSIDERATION */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="properties-heading">
          <div className="container mx-auto container-responsive">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="properties-heading"
                  className="heading-responsive font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  PROPIEDADES DESTACADAS
                </h2>
                <p className="text-base sm:text-xl font-poppins text-gray-600 max-w-3xl mx-auto">
                  Descubre nuestros proyectos más exclusivos en las mejores ubicaciones de Ecuador, Panamá y Estados
                  Unidos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {/* Departamento Samborondón */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-red-600">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src="/images/samborondon-living-1.jpg"
                      alt="Departamento en venta Samborondón - Sala moderna con diseño contemporáneo y acabados de lujo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-poppins font-semibold">
                        MÁS POPULAR
                      </span>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-anton font-bold text-gray-900 mb-2 sm:mb-3">
                      DEPARTAMENTO EN VENTA - SAMBORONDÓN
                    </h3>
                    <p className="font-poppins text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      Exclusividad y confort en Samborondón. Ubicación estratégica Km 2.5 Vía Samborondón, zona de alta
                      plusvalía.
                    </p>
                    <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
                        <span className="font-poppins text-xs sm:text-sm">Samborondón, Ecuador</span>
                      </div>
                      <div className="text-red-600 font-anton font-bold text-base sm:text-lg">Desde $119,900</div>
                    </div>
                    <Link href="/propiedades/departamento-samborondon">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold rounded-lg transition-colors text-sm sm:text-base py-2 sm:py-3">
                        Ver Detalles
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Departamentos en Isla Mocolí */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-red-600">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src="/images/isla-mocoli-exterior-1.jpg"
                      alt="Departamentos en Isla Mocolí - Desarrollo residencial moderno de 4 pisos con diseño contemporáneo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-poppins font-semibold">
                        ISLA EXCLUSIVA
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-anton font-bold text-gray-900 mb-2 sm:mb-3">
                      DEPARTAMENTOS EN ISLA MOCOLÍ
                    </h3>
                    <p className="font-poppins text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      Exclusividad y confort en Isla Mocolí. Ubicación estratégica Km 6, zona de alta plusvalía rodeada
                      de naturaleza.
                    </p>
                    <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
                        <span className="font-poppins text-xs sm:text-sm">Isla Mocolí, Guayaquil</span>
                      </div>
                      <div className="text-red-600 font-anton font-bold text-base sm:text-lg">$223,000</div>
                    </div>
                    <Link href="/propiedades/departamentos-isla-mocoli">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold rounded-lg transition-colors text-sm sm:text-base py-2 sm:py-3">
                        Ver Detalles
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* View All Properties Button */}
              <div className="text-center">
                <Link href="/propiedades">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors">
                    Ver Todas las Propiedades
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - CONSIDERATION */}
        <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto container-responsive">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="services-heading"
                  className="heading-responsive font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  ¿CÓMO TE PUEDO AYUDAR?
                </h2>
                <p className="text-base sm:text-xl font-poppins text-gray-600 max-w-3xl mx-auto">
                  Servicios integrales de bienes raíces para cubrir todas tus necesidades inmobiliarias.
                </p>
              </div>

              {/* Services Slider */}
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 sm:gap-6 pb-4" style={{ width: "max-content" }}>
                    {[
                      {
                        src: "/images/services-compra-venta.webp",
                        alt: "Servicio de Compra/Venta de Propiedades - Te ayudo a encontrar la propiedad perfecta o vender tu inmueble al mejor precio.",
                        message:
                          "Hola Janneth, me interesa el servicio de Compra/Venta de propiedades. ¿Podrías darme más información?",
                      },
                      {
                        src: "/images/services-inversion.webp",
                        alt: "Servicio de Inversión Inmobiliaria - Asesoría especializada en inversiones inmobiliarias rentables y seguras.",
                        message:
                          "Hola Janneth, me interesa la Asesoría en Inversiones inmobiliarias. ¿Podrías darme más información?",
                      },
                      {
                        src: "/images/services-asesoria.webp",
                        alt: "Servicio de Asesoría Inmobiliaria - Consultoría completa para tomar las mejores decisiones inmobiliarias.",
                        message:
                          "Hola Janneth, me interesa la Consultoría inmobiliaria. ¿Podrías darme más información?",
                      },
                      {
                        src: "/images/services-internacional.webp",
                        alt: "Servicio de Propiedades Internacionales - Propiedades en el extranjero para diversificar tu portafolio de inversión.",
                        message:
                          "Hola Janneth, me interesan las Propiedades Internacionales. ¿Podrías darme más información?",
                      },
                    ].map((service, index) => (
                      <Link
                        key={index}
                        href={`https://wa.me/593987167782?text=${encodeURIComponent(service.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-64 sm:w-72"
                        aria-label={service.alt}
                      >
                        <Image
                          src={service.src || "/placeholder.svg"}
                          alt={service.alt}
                          width={300}
                          height={300}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Scroll indicator dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magazine/Instagram Banner Section - AUTO CAROUSEL */}
        <section className="w-full relative" aria-label="Banners promocionales">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out animate-banner-slide">
              {/* Magazine Banner */}
              <div className="w-full flex-shrink-0">
                <a
                  href="https://www.jannethaguirremagazine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full hover:opacity-95 transition-opacity focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-offset-2"
                  aria-label="Visitar magazine inmobiliario - Conoce todo sobre el mundo inmobiliario"
                >
                  <Image
                    src="/images/magazine-inmobiliario-janneth-aguirre.webp"
                    alt="Magazine Inmobiliario Janneth Aguirre - Conoce todo sobre el mundo inmobiliario, últimas novedades y tendencias del mercado"
                    width={1920}
                    height={400}
                    className="w-full h-auto"
                    sizes="100vw"
                  />
                </a>
              </div>

              {/* Instagram Banner */}
              <div className="w-full flex-shrink-0">
                <a
                  href="https://www.instagram.com/janneth_aguirrem?igsh=anQ1c2sxcXFsaG85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full hover:opacity-95 transition-opacity focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-offset-2"
                  aria-label="Seguir en Instagram - Entrevistas, congresos, renders, artículos, proyectos y avances de obra"
                >
                  <Image
                    src="/images/siguenos-en-instagram.webp"
                    alt="Síguenos en Instagram - Entrevistas, congresos, renders, artículos, proyectos y avances de obra con Janneth Aguirre"
                    width={1920}
                    height={400}
                    className="w-full h-auto"
                    sizes="100vw"
                  />
                </a>
              </div>
            </div>

            {/* Banner indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-indicator-1"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-indicator-2"></div>
            </div>
          </div>
        </section>

        {/* Certifications Section - EVALUATION */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="certifications-heading">
          <div className="container mx-auto container-responsive">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h3
                  id="certifications-heading"
                  className="text-xl sm:text-2xl lg:text-3xl font-anton font-bold text-gray-900 mb-3 sm:mb-4"
                >
                  RESPALDADA POR LAS MEJORES CERTIFICACIONES
                </h3>
                <p className="font-poppins text-gray-600 text-sm sm:text-base lg:text-lg">
                  Miembro certificado de las organizaciones más prestigiosas del sector inmobiliario
                </p>
              </div>

              {/* Auto-scrolling Certifications Slider */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-infinite gap-3 sm:gap-4 lg:gap-6">
                  {infiniteLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={128}
                        height={72}
                        className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional credibility text */}
              <div className="mt-8 sm:mt-12 text-center">
                <p className="font-poppins text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                  Estas certificaciones y alianzas estratégicas respaldan mi compromiso con la excelencia profesional y
                  garantizan el más alto nivel de servicio en el sector inmobiliario.
                </p>
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center">
                <a
                  href="https://www.cainec.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-lg"
                  aria-label="Visitar CAINEC - Cámara Inmobiliaria del Ecuador"
                >
                  <Image
                    src="/images/logo-cainec.webp"
                    alt="CAINEC - Cámara Inmobiliaria del Ecuador"
                    width={300}
                    height={100}
                    className="h-16 sm:h-20 md:h-24 w-auto"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Janneth Banner - NEW */}
        <section className="w-full" aria-label="Conoce más sobre Janneth Aguirre">
          <Link href="https://jannethaguirre.com" className="block w-full hover:opacity-95 transition-opacity">
            <Image
              src="/images/banner-app-descarga.webp"
              alt="Descargá la app de Janneth Aguirre para encontrar propiedades, hacer consultas y acceder a contenido eclusivos de inversiones en Ecuador, Panamá y Estados Unidos"
              width={1920}
              height={600}
              className="w-full h-auto"
              sizes="100vw"
            />
          </Link>
        </section>

        {/* Strong CTA Section - PURCHASE */}
        <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-red-600" aria-labelledby="cta-heading">
          <div className="container mx-auto container-responsive text-center">
            <div className="max-w-4xl mx-auto">
              <h2 id="cta-heading" className="heading-responsive font-anton font-bold text-white mb-4 sm:mb-6">
                ¿LISTO PARA DAR EL SIGUIENTE PASO?
              </h2>
              <p className="text-base sm:text-xl font-poppins text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Agenda una consulta gratuita conmigo y descubre cómo puedo ayudarte a encontrar la propiedad perfecta o
                realizar la mejor inversión de tu vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors"
                  aria-label="Llamar ahora a Janneth Aguirre"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                  Llamar Ahora
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors bg-transparent"
                  aria-label="Enviar mensaje por WhatsApp"
                >
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                  Enviar WhatsApp
                </Button>
              </div>
              <p className="text-white/80 font-poppins text-sm sm:text-base">
                📱 +593 98 716 7782 | 📧 jannethaguirrecontacto@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white" role="contentinfo">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="container mx-auto container-responsive">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <Image
                    src="/images/logo-janneth-aguirre.webp"
                    alt="Janneth Aguirre Bienes Raíces - Navidad"
                    width={200}
                    height={80}
                    className="h-12 w-auto mb-4 brightness-0 invert"
                  />
                  <p className="font-poppins text-gray-300 text-sm leading-relaxed mb-4">
                    Tu experta en bienes raíces de confianza con más de 15 años de experiencia. Encuentra tu hogar ideal
                    o realiza la mejor inversión.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-red-500 mr-2" />
                      <span className="font-poppins text-xs text-gray-400">Certificada NAR, CRS</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-anton font-bold mb-4 text-white">SERVICIOS</h3>
                  <nav className="space-y-3 font-poppins text-sm" aria-label="Servicios inmobiliarios">
                    <Link href="/propiedades" className="block text-gray-300 hover:text-white transition-colors">
                      Compra de Propiedades
                    </Link>
                    <Link href="/propiedades" className="block text-gray-300 hover:text-white transition-colors">
                      Venta de Inmuebles
                    </Link>
                    <Link href="#servicios" className="block text-gray-300 hover:text-white transition-colors">
                      Asesoría en Inversiones
                    </Link>
                    <Link href="#servicios" className="block text-gray-300 hover:text-white transition-colors">
                      Propiedades Internacionales
                    </Link>
                    <Link href="/nosotros" className="block text-gray-300 hover:text-white transition-colors">
                      Consultoría Inmobiliaria
                    </Link>
                  </nav>
                </div>

                {/* Locations */}
                <div>
                  <h3 className="text-lg font-anton font-bold mb-4 text-white">UBICACIONES</h3>
                  <div className="space-y-3 font-poppins text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">Guayaquil, Ecuador</p>
                        <p className="text-gray-400 text-xs">Centro financiero</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">Samborondón</p>
                        <p className="text-gray-400 text-xs">Zona exclusiva</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">Costa Ecuatoriana</p>
                        <p className="text-gray-400 text-xs">Propiedades frente al mar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact & Social */}
                <div>
                  <h3 className="text-lg font-anton font-bold mb-4 text-white">CONTACTO</h3>
                  <div className="space-y-3 font-poppins text-sm mb-6">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-red-500 mr-3" />
                      <a href="tel:+593987167782" className="text-gray-300 hover:text-white transition-colors">
                        +593 98 716 7782
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-red-500 mr-3" />
                      <a
                        href="mailto:jannethaguirrecontacto@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        jannethaguirrecontacto@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-red-500 mr-3" />
                      <a
                        href="https://www.jannethaguirre.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        jannethaguirre.online
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-red-500 mr-3" />
                      <span className="text-gray-300">Lun - Vie: 8:00 - 18:00</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-anton font-bold mb-3 text-white text-sm">SÍGUENOS</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/janneth_aguirrem/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                        aria-label="Seguir en Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.facebook.com/jannethaguirrebienesraices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                        aria-label="Seguir en Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/janneth-aguirre-0b1b3b1b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                        aria-label="Seguir en LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="https://vm.tiktok.com/ZMhnEwCHp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                        aria-label="Seguir en TikTok"
                      >
                        <LinkIcon className="w-4 h-4" /> {/* Using LinkIcon as a generic icon for TikTok */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto container-responsive">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <p className="font-poppins text-gray-400 text-sm">
                    © 2024 Janneth Aguirre Bienes Raíces. Todos los derechos reservados.
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Política de Privacidad
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Términos de Uso
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-red-500" />
                  <span className="font-poppins text-gray-400 text-sm">Miembro NAR, CRS, FENACBRE, CAINEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
      @keyframes scroll-infinite {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%); /* Moves exactly one full set of logos for seamless loop */
        }
      }
      .animate-scroll-infinite {
        animation: scroll-infinite 6s linear infinite; /* Even faster: 6s */
        will-change: transform;
      }
      .animate-scroll-infinite:hover {
        animation-play-state: paused;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      @keyframes banner-slide {
        0%, 45% {
          transform: translateX(0);
        }
        50%, 95% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      @keyframes indicator-1 {
        0%, 45% {
          background-color: rgba(255, 255, 255, 1);
        }
        50%, 95% {
          background-color: rgba(255, 255, 255, 0.6);
        }
        100% {
          background-color: rgba(255, 255, 255, 1);
        }
      }
      @keyframes indicator-2 {
        0%, 45% {
          background-color: rgba(255, 255, 255, 0.6);
        }
        50%, 95% {
          background-color: rgba(255, 255, 255, 1);
        }
        100% {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
      .animate-banner-slide {
        animation: banner-slide 10s infinite;
      }
      .animate-indicator-1 {
        animation: indicator-1 10s infinite;
      }
      .animate-indicator-2 {
        animation: indicator-2 10s infinite;
      }
    `}</style>
    </div>
  )
}
