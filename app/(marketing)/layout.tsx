import type { ReactNode } from "react";
import { Header } from "@/components/sections/header";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-8 sm:pt-12 lg:pt-16">{children}</main>
    </div>
  );
}
