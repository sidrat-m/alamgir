import { Metadata } from "next"

export const metadata: Metadata = {

  title: "Gallery | Sarwar Alamgir",
  description: "Learn about Sarwar Alamgir, his background, and his vision for Fatikchhari.",

}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
