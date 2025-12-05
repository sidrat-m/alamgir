import { Metadata } from "next"

export const metadata: Metadata = {

  title: "Manifesto | Sarwar Alamgir",
  description: "Learn about Sarwar Alamgir, his background, and his vision for Fatikchhari.",

}

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
