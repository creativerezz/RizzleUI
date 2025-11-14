import { SiteHeader } from "@/components/site-header"

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      {children}
    </div>
  )
}

