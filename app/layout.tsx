import type React from "react"
import type { Metadata, Viewport } from "next"
import { Anton, Poppins } from "next/font/google"
import "./globals.css"
import { ServiceWorkerRegister } from "@/components/service-worker-register" // Importar el componente de registro

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#dc2626", // Color rojo principal de tu marca
}

export const metadata: Metadata = {
  title: {
    default: "Janneth Aguirre - Bienes Raíces | Experta Inmobiliaria Guayaquil, Ecuador",
    template: "%s | Janneth Aguirre Bienes Raíces",
  },
  description:
    "Janneth Aguirre, tu experta inmobiliaria en Guayaquil y Samborondón, Ecuador. Más de 20 años de experiencia en compra, venta, alquiler e inversión de propiedades residenciales y comerciales. ¡Encuentra tu hogar ideal o la mejor inversión!",
  keywords: [
    "bienes raíces Ecuador",
    "propiedades Guayaquil",
    "inmobiliaria Samborondón",
    "Janneth Aguirre",
    "casas Ecuador",
    "departamentos Ecuador",
    "inversión inmobiliaria",
    "agente inmobiliario Guayaquil",
    "propiedades de lujo Ecuador",
    "terrenos Samborondón",
    "alquileres Guayaquil",
    "consultorios Samborondón",
    "propiedades internacionales",
  ],
  authors: [{ name: "Janneth Aguirre", url: "https://www.jannethaguirre.com" }],
  creator: "Janneth Aguirre",
  publisher: "Janneth Aguirre Bienes Raíces",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jannethaguirre.com",
    siteName: "Janneth Aguirre Bienes Raíces",
    title: "Janneth Aguirre - Experta en Bienes Raíces Guayaquil, Ecuador",
    description:
      "Janneth Aguirre, tu experta inmobiliaria en Guayaquil y Samborondón, Ecuador. Más de 20 años de experiencia en compra, venta, alquiler e inversión de propiedades residenciales y comerciales. ¡Encuentra tu hogar ideal o la mejor inversión!",
    images: [
      {
        url: "https://www.jannethaguirre.com/images/og-image-janneth.jpg",
        width: 1200,
        height: 630,
        alt: "Janneth Aguirre - Embajadora de Ecuador en Congreso Internacional de Mujeres 2025 - Encuentra tu hogar ideal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janneth Aguirre - Experta en Bienes Raíces Guayaquil, Ecuador",
    description:
      "Janneth Aguirre, tu experta inmobiliaria en Guayaquil y Samborondón, Ecuador. Más de 20 años de experiencia en compra, venta, alquiler e inversión de propiedades residenciales y comerciales. ¡Encuentra tu hogar ideal o la mejor inversión!",
    images: ["https://www.jannethaguirre.com/images/og-image-janneth.jpg"],
  },
  alternates: {
    canonical: "https://www.jannethaguirre.com",
  },
  verification: {
    google: "your-google-verification-code", // Reemplaza con tu código de verificación de Google Search Console
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${anton.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-poppins antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Saltar al contenido principal
        </a>
        <div id="main-content">{children}</div>
        <ServiceWorkerRegister /> {/* Registrar el Service Worker */}
      </body>
    </html>
  )
}
