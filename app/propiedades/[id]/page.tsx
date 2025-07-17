import { properties } from "@/lib/properties"
import PropertyDetailPageClient from "./PropertyDetailPageClient"

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  return <PropertyDetailPageClient params={params} />
}
