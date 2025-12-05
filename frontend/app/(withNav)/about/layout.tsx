import { Metadata } from "next"

export const metadata: Metadata = {

  title: "About | Sarwar Alamgir",
  description: "Learn about Sarwar Alamgir, his background, and his vision for Fatikchhari.",

}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
