export interface Property {
  id: string
  name: string
  location: string
  price: number
  priceType: string
  area: string
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  longDescription: string
  features: string[]
  images: string[]
  specifications: Record<string, string>
  financing: {
    title: string
    options: string[]
    details: string
  }
  contact: {
    phone: string
    email: string
  }
  category?: string
  country?: string
}

export const properties: Property[] = [
  {
    id: "departamento-samborondon",
    name: "Departamento en Venta - Samborondón",
    location: "Samborondón, Guayaquil",
    price: 119900,
    priceType: "Desde",
    area: "85 m²",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    description:
      "Exclusividad y confort en Samborondón. Ubicación estratégica Km 2.5 Vía Samborondón, zona de alta plusvalía.",
    longDescription:
      "Este exclusivo departamento en Samborondón ofrece una experiencia de vida única con acabados de primera calidad y diseño moderno. Ubicado estratégicamente en el Km 2.5 de la Vía Samborondón, se encuentra en una zona de alta plusvalía con fácil acceso a centros comerciales, restaurantes y colegios de prestigio.",
    features: [
      "Diseño moderno y funcional",
      "Acabados de lujo",
      "Amplios ventanales",
      "Cocina tipo americana",
      "Balcón privado",
      "Seguridad 24/7",
      "Áreas verdes y recreativas",
      "Cerca de centros comerciales y educativos",
    ],
    images: [
      "/images/samborondon-living-1.jpg",
      "/images/samborondon-living-2.jpg",
      "/images/samborondon-bedroom-1.jpg",
      "/images/samborondon-bedroom-2.jpg",
      "/images/samborondon-bathroom-1.jpg",
      "/images/samborondon-bathroom-2.jpg",
      "/images/samborondon-exterior-1.jpg",
      "/images/samborondon-exterior-2.jpg",
    ],
    specifications: {
      "Área Total": "85 m²",
      Dormitorios: "2",
      Baños: "2",
      Parqueaderos: "1",
      Piso: "Varios disponibles",
      "Año de construcción": "2024",
      Estado: "En construcción",
    },
    financing: {
      title: "FINANCIAMIENTO FLEXIBLE",
      options: [
        "Reserva con solo $500",
        "10% a la firma de la promesa de compraventa",
        "20% durante la construcción en hasta 36 meses",
        "70% con financiamiento bancario o BIESS",
      ],
      details:
        "Facilidades de pago flexibles que se adaptan a tu presupuesto. Te asesoramos en todo el proceso de financiamiento bancario.",
    },
    contact: {
      phone: "+593 98 716 7782",
      email: "info@jannethaguirrebienesraices.com",
    },
    category: "destacado",
    country: "Ecuador",
  },
  {
    id: "departamentos-isla-mocoli",
    name: "Departamentos en Isla Mocolí",
    location: "Isla Mocolí, Guayaquil",
    price: 223000,
    priceType: "",
    area: "120 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    description:
      "Exclusividad y confort en Isla Mocolí. Ubicación estratégica Km 6, zona de alta plusvalía rodeada de naturaleza.",
    longDescription:
      "Descubre la tranquilidad de vivir en Isla Mocolí, un desarrollo exclusivo que combina la comodidad urbana con la serenidad de la naturaleza. Estos departamentos ofrecen espacios amplios, acabados de calidad y acceso a amenidades de primera clase en un entorno seguro y privado.",
    features: [
      "Ubicación exclusiva en isla privada",
      "Rodeado de naturaleza",
      "Seguridad 24/7",
      "Áreas verdes extensas",
      "Club social",
      "Piscina comunitaria",
      "Gimnasio",
      "Cancha deportiva",
    ],
    images: [
      "/images/isla-mocoli-exterior-1.jpg",
      "/images/isla-mocoli-exterior-2.jpg",
      "/images/isla-mocoli-interiores-1.jpg",
      "/images/isla-mocoli-interiores-2.jpg",
      "/images/isla-mocoli-amenidades.jpg",
    ],
    specifications: {
      "Área Total": "120 m²",
      Dormitorios: "3",
      Baños: "2",
      Parqueaderos: "2",
      Piso: "4 pisos disponibles",
      "Año de construcción": "2024",
      Estado: "En construcción",
    },
    financing: {
      title: "FINANCIAMIENTO FLEXIBLE",
      options: [
        "Reserva con solo $500",
        "10% a la firma de la promesa de compraventa",
        "20% durante la construcción en hasta 36 meses",
        "70% con financiamiento bancario o BIESS",
      ],
      details:
        "Facilidades de pago flexibles que se adaptan a tu presupuesto. Te asesoramos en todo el proceso de financiamiento bancario.",
    },
    contact: {
      phone: "+593 98 716 7782",
      email: "info@jannethaguirrebienesraices.com",
    },
    category: "lujo",
    country: "Ecuador",
  },
  {
    id: "casas-modernas-urbanizacion-residencial",
    name: "Casas Modernas en Urbanización Residencial",
    location: "Vía a la Costa, Guayaquil",
    price: 180000,
    priceType: "",
    area: "120 m² construcción / 180 m² terreno",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    description:
      "Descubre tu nuevo hogar en esta exclusiva urbanización residencial. Casas modernas con acabados de primera, amplios espacios y diseño funcional.",
    longDescription:
      "Estas casas modernas representan la perfecta combinación entre diseño contemporáneo y funcionalidad. Ubicadas en una urbanización residencial exclusiva, ofrecen la tranquilidad y seguridad que tu familia merece, con acceso a áreas verdes y recreativas. Ideal para quienes buscan calidad de vida cerca de la ciudad.",
    features: [
      "Diseño moderno y funcional",
      "Acabados de lujo",
      "Amplios ventanales",
      "Cocina tipo americana",
      "Patio privado",
      "Seguridad 24/7",
      "Áreas verdes y recreativas",
      "Cerca de centros comerciales y educativos",
    ],
    images: [
      "/images/casas-modernas-urbanizacion-residencial.jpeg",
      "/images/casas-modernas-modelo-urbanizacion-residencial.jpeg",
      "/images/casas-modernas-modelo-3-urbanizacion-residencial.jpeg",
      "/images/casas-modernas-proyecto-residencial-al-sol.jpeg",
    ],
    specifications: {
      "Área de construcción": "120 m²",
      "Área de terreno": "180 m²",
      Dormitorios: "3",
      Baños: "2.5",
      Parqueaderos: "2",
      "Año de construcción": "2024",
      Estado: "Listo para entrega",
    },
    financing: {
      title: "FINANCIAMIENTO FLEXIBLE",
      options: [
        "Reserva con solo $500",
        "10% a la firma de la promesa de compraventa",
        "20% durante la construcción en hasta 36 meses",
        "70% con financiamiento bancario o BIESS",
      ],
      details:
        "Facilidades de pago flexibles que se adaptan a tu presupuesto. Te asesoramos en todo el proceso de financiamiento bancario.",
    },
    contact: {
      phone: "+593 98 716 7782",
      email: "info@jannethaguirrebienesraices.com",
    },
    category: "destacado",
    country: "Ecuador",
  },
  {
    id: "locales-comerciales-consultorios-samborondon",
    name: "Locales Comerciales y Consultorios en Samborondón",
    location: "City Center, Samborondón",
    price: 150000,
    priceType: "Desde",
    area: "Desde 40 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    description:
      "Invierte en tu futuro con estos locales comerciales y consultorios estratégicamente ubicados en el corazón de Samborondón.",
    longDescription:
      "Estos locales comerciales y consultorios están estratégicamente ubicados en el corazón de Samborondón, ideal para emprendedores y profesionales que buscan un espacio moderno y funcional con alto flujo de clientes. Variedad de tamaños disponibles para adaptarse a tus necesidades específicas de negocio.",
    features: [
      "Ubicación privilegiada",
      "Diseño moderno",
      "Seguridad 24/7",
      "Amplio parqueo para clientes",
      "Cerca de zonas residenciales y comerciales",
      "Ideal para oficinas, consultorios o tiendas",
    ],
    images: [
      "/images/locales-comerciales-consultorios-samborodon-city-center-janneth-aguirre.jpeg",
      "/images/locales-comerciales-samborodon-city-center-janneth-aguirre.jpeg",
      "/images/consultorios-samborodon-city-center-janneth-aguirre.jpeg",
      "/images/locales-comerciales-consultorios-samborodon-city-center-disponibles.jpeg",
    ],
    specifications: {
      Área: "Desde 40 m²",
      Baños: "1",
      Parqueaderos: "1",
      Piso: "Planta baja y segundo piso",
      "Año de construcción": "2024",
      Estado: "Listo para entrega",
    },
    financing: {
      title: "FINANCIAMIENTO FLEXIBLE",
      options: [
        "Reserva con solo $500",
        "10% a la firma de la promesa de compraventa",
        "20% durante la construcción en hasta 36 meses",
        "70% con financiamiento bancario o BIESS",
      ],
      details:
        "Facilidades de pago flexibles que se adaptan a tu presupuesto. Te asesoramos en todo el proceso de financiamiento bancario.",
    },
    contact: {
      phone: "+593 98 716 7782",
      email: "info@jannethaguirrebienesraices.com",
    },
    category: "comercial",
    country: "Ecuador",
  },
  {
    id: "departamentos-exclusivos-en-samborondon",
    name: "Departamentos Exclusivos En Samborondón",
    location: "Samborondón, Guayaquil",
    price: 280000,
    priceType: "",
    area: "150 m²",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    description:
      "Vive el lujo y la comodidad en estos exclusivos departamentos ubicados en una de las zonas más prestigiosas de Samborondón.",
    longDescription:
      "Estos exclusivos departamentos ofrecen una experiencia de vida inigualable con acabados de alta gama, amplios espacios y vistas espectaculares. Cada departamento ha sido diseñado para ofrecer el máximo confort, con amenidades de primera clase y la tranquilidad de un entorno seguro en una de las zonas más prestigiosas de Samborondón.",
    features: [
      "Acabados de alta gama",
      "Diseño moderno y elegante",
      "Amplios balcones con vistas",
      "Cocina gourmet equipada",
      "Áreas sociales de lujo",
      "Piscina y gimnasio",
      "Seguridad 24/7",
      "Cerca de centros comerciales, restaurantes y colegios de prestigio",
    ],
    images: [
      "/images/departamentos-exclusivos-en-samborondon.jpeg",
      "/images/sala-departamento-exlusivo-samborodon.jpeg",
      "/images/habitacion-departamento-exlusivo-samborodon.jpeg",
      "/images/baño-departamento-exlusivo-samborodon.jpeg",
    ],
    specifications: {
      "Área Total": "150 m²",
      Dormitorios: "3",
      Baños: "3.5",
      Parqueaderos: "2",
      Piso: "Varios disponibles",
      "Año de construcción": "2024",
      Estado: "En construcción",
    },
    financing: {
      title: "FINANCIAMIENTO FLEXIBLE",
      options: [
        "Reserva con solo $500",
        "10% a la firma de la promesa de compraventa",
        "20% durante la construcción en hasta 36 meses",
        "70% con financiamiento bancario o BIESS",
      ],
      details:
        "Facilidades de pago flexibles que se adaptan a tu presupuesto. Te asesoramos en todo el proceso de financiamiento bancario.",
    },
    contact: {
      phone: "+593 98 716 7782",
      email: "info@jannethaguirrebienesraices.com",
    },
    category: "lujo",
    country: "Ecuador",
  },
]
