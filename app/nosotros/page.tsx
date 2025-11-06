"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HamburgerButton } from "@/components/hamburger-button"
import { MobileMenu } from "@/components/mobile-menu"
import { Users, Building, Star, ArrowLeft, Award, Globe, Phone } from "lucide-react"

export default function NosotrosPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30" role="banner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Navigation */}
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
                className="text-red-600 font-poppins font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Nosotros
              </Link>
              <Link
                href="/#servicios"
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
                href="/#contacto"
                className="text-gray-700 hover:text-red-600 font-poppins font-medium transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile menu button */}
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
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>

        {/* About Janneth Banner */}
        <section className="w-full" aria-label="Conoce más sobre Janneth Aguirre">
          <Image
            src="/images/sobre-janneth-aguirre-new.webp"
            alt="Janneth Aguirre - Embajadora de Ecuador en el 3° Congreso Internacional de Mujeres 2025 en Lima, Perú"
            width={1920}
            height={600}
            className="w-full h-auto"
            sizes="100vw"
            priority
          />
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="about-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h1
                  id="about-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  🏡 SOBRE NOSOTROS
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-anton font-bold text-red-600 mb-6 sm:mb-8">
                  CONECTAMOS PERSONAS CON INVERSIONES INTELIGENTES
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
                <div className="order-2 lg:order-1">
                  <Image
                    src="/images/janneth-embajadora-ecuador.jpg"
                    alt="Janneth Aguirre - Embajadora de Ecuador para InmoPerú Mujer"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <p className="font-poppins text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Janneth Aguirre es una reconocida profesional del sector inmobiliario en Ecuador, con{" "}
                    <strong>más de 15 años de experiencia</strong> y una trayectoria consolidada en la comercialización
                    de proyectos en planos, inversiones de alta rentabilidad y gestión de alquileres corporativos.
                  </p>
                  <p className="font-poppins text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Es <strong>CEO y fundadora de Janneth Aguirre Bienes Raíces</strong>, firma posicionada en
                    Guayaquil, Samborondón e Isla Mocolí, con foco en propiedades residenciales, terrenos, consultorios
                    y desarrollos de alto valor.
                  </p>
                  <p className="font-poppins text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Certificada como <strong>CBR, CRS® y REALTOR® Internacional</strong>, Janneth ha sido reconocida por
                    su liderazgo, ética profesional y excelencia comercial. Es además{" "}
                    <strong>Embajadora de Ecuador ante Inmo Perú Mujer 2025</strong>, impulsando la colaboración
                    binacional en inversión inmobiliaria y turismo residencial.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
                <p className="font-poppins text-gray-600 leading-relaxed text-sm sm:text-base text-center">
                  Janneth lidera un equipo que ofrece <strong>asesoría integral</strong>: preventas, gestión digital,
                  acompañamiento legal y soluciones de financiamiento. Su enfoque humano y estratégico ha ayudado a
                  cientos de familias e inversionistas a tomar decisiones inteligentes en el mundo inmobiliario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Data Section */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="professional-data-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="professional-data-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  📌 DATOS PROFESIONALES
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                <Card className="p-6 sm:p-8 border-0 shadow-lg">
                  <CardContent className="pt-0">
                    <h3 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-6">
                      INFORMACIÓN PERSONAL
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-poppins font-semibold text-gray-700">Nombre completo:</span>
                        <p className="font-poppins text-gray-600">Janneth Aguirre Mosquera</p>
                      </div>
                      <div>
                        <span className="font-poppins font-semibold text-gray-700">CEO:</span>
                        <p className="font-poppins text-gray-600">Janneth Aguirre Bienes Raíces</p>
                      </div>
                      <div>
                        <span className="font-poppins font-semibold text-gray-700">Embajadora:</span>
                        <p className="font-poppins text-gray-600">Inmo Perú Mujer 2025</p>
                      </div>
                      <div>
                        <span className="font-poppins font-semibold text-gray-700">Cargo:</span>
                        <p className="font-poppins text-gray-600">Coordinadora de Asuntos Internacionales CAINEC</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 sm:p-8 border-0 shadow-lg">
                  <CardContent className="pt-0">
                    <h3 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-6">CERTIFICACIONES</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-red-600 mr-3" />
                        <span className="font-poppins text-gray-700">
                          Corredora de Bienes Raíces (CBR) – ACBIR Guayas
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-red-600 mr-3" />
                        <span className="font-poppins text-gray-700">
                          Certified Residential Specialist (CRS®) – NAR
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-red-600 mr-3" />
                        <span className="font-poppins text-gray-700">REALTOR® Internacional – NAR (EUA)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 p-6 sm:p-8 border-0 shadow-lg bg-red-50">
                <CardContent className="pt-0">
                  <h3 className="text-xl sm:text-2xl font-anton font-bold text-gray-900 mb-6 text-center">
                    CONTACTO DIRECTO
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 text-red-600 mb-2" />
                      <span className="font-poppins text-sm text-gray-700">📞 +593 98 716 7782</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Globe className="w-6 h-6 text-red-600 mb-2" />
                      <span className="font-poppins text-sm text-gray-700">🌐 www.jannethaguirre.com</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="w-6 h-6 text-red-600 mb-2" />
                      <span className="font-poppins text-sm text-gray-700">📱 IG: @janneth_aguirrem</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="recognition-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="recognition-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  🏅 RECONOCIMIENTOS
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-anton font-bold text-gray-900 mb-3">"AGENTE TOP PREVENTAS"</h3>
                    <p className="font-poppins text-gray-600 text-sm">Ciudad Celeste Residences (2022)</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-anton font-bold text-gray-900 mb-3">"EMPRENDEDORA DEL AÑO"</h3>
                    <p className="font-poppins text-gray-600 text-sm">BR Magazine (2021)</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-anton font-bold text-gray-900 mb-3">MEJOR DESEMPEÑO COMERCIAL</h3>
                    <p className="font-poppins text-gray-600 text-sm">Uribe Schwarzkopf (2023)</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <p className="font-poppins text-gray-600 text-sm sm:text-base">
                  Participación constante en medios, podcast y revistas inmobiliarias
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* International Recognition Gallery */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="gallery-title">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2
                  id="gallery-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-anton font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  RECONOCIMIENTO INTERNACIONAL
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-600 max-w-3xl mx-auto">
                  Embajadora de Ecuador en eventos internacionales del sector inmobiliario.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-inmo-peru-2025.jpg"
                    alt="Janneth Aguirre - Inmo Perú Mujer 2025, Embajadora de Ecuador"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Inmo Perú Mujer 2025</p>
                      <p className="text-white/80 font-poppins text-xs">Embajadora de Ecuador</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-bandera-ecuador.jpg"
                    alt="Janneth Aguirre sosteniendo la bandera de Ecuador en evento internacional"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Representando Ecuador</p>
                      <p className="text-white/80 font-poppins text-xs">Evento Internacional</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-inmotrends-ecuador.jpg"
                    alt="Janneth Aguirre en el 5° Congreso InmoTRENDS Ecuador 2025 con CAINEC"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">InmoTRENDS Ecuador 2025</p>
                      <p className="text-white/80 font-poppins text-xs">5° Congreso con CAINEC</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-aguirre-uribe.webp"
                    alt="Janneth Aguirre con Joseph Schwarzkopf - Premio al Mejor Desempeño"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Premio al Mejor Desempeño</p>
                      <p className="text-white/80 font-poppins text-xs">Con Joseph Schwarzkopf</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/intentendente-samborondon.jpg"
                    alt="Janneth Aguirre con el Intendente de Samborondón en evento oficial"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Con Alcalde de Samborondón</p>
                      <p className="text-white/80 font-poppins text-xs">Relaciones Institucionales</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/premi-mejor-desempeño.jpg"
                    alt="Janneth Aguirre recibiendo premio por Mejor Desempeño Comercial"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Premio Mejor Desempeño</p>
                      <p className="text-white/80 font-poppins text-xs">Reconocimiento Comercial</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-evento-cainec.jpg"
                    alt="Janneth Aguirre en evento CAINEC con patrocinadores del sector inmobiliario"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Evento CAINEC</p>
                      <p className="text-white/80 font-poppins text-xs">Sector Inmobiliario</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-congreso-mujeres.jpg"
                    alt="Janneth Aguirre en Congreso de Mujeres Inmobiliarias"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Congreso de Mujeres</p>
                      <p className="text-white/80 font-poppins text-xs">Liderazgo Inmobiliario</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/janneth-reunion-profesional.jpg"
                    alt="Janneth Aguirre en reunión profesional del sector inmobiliario"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-poppins text-sm font-semibold">Reunión Profesional</p>
                      <p className="text-white/80 font-poppins text-xs">Sector Inmobiliario</p>
                    </div>
                  </div>
                </div>
              </div>
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
                ¿LISTO PARA TRABAJAR CONMIGO?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-poppins text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Con más de 15 años de experiencia y reconocimiento internacional, estoy aquí para ayudarte a encontrar
                la propiedad perfecta o realizar la mejor inversión.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors">
                  CONTACTAR AHORA
                </Button>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-semibold rounded-lg transition-colors bg-transparent"
                  >
                    VER SERVICIOS
                  </Button>
                </Link>
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
                  Tu experta en bienes raíces de confianza. Conectamos personas con inversiones inteligentes.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-anton font-bold mb-3 sm:mb-4">CONTACTO</h3>
                <div className="space-y-2 font-poppins text-gray-300 text-sm sm:text-base">
                  <p>🌐 www.jannethaguirre.com</p>
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
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/janneth-aguirre-0b1b3b1b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/jannethaguirrebienesraices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://vm.tiktok.com/ZMhnEwCHp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    TikTok
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
