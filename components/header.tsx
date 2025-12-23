"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Жителям", href: "/residents" },
  { name: "Транспорт", href: "/transport" },
  { name: "Афиша", href: "/events" },
  { name: "Город", href: "/city" },
  { name: "Туристам", href: "/tourism" },
  { name: "Бизнесу", href: "/business" },
  { name: "Обращения", href: "/reports" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[rgb(var(--navy))] text-[rgb(var(--fog))]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))]">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div className="hidden md:block">
              <div className="font-heading text-xl font-bold leading-none">Тарков</div>
              <div className="text-xs text-[rgb(var(--steel))]">Городской портал</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))] rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & CTA */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Поиск</span>
            </Button>

            <Button
              asChild
              className="hidden md:flex bg-[rgb(var(--amber))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--amber))]/90 font-semibold"
            >
              <Link href="/reports">
                <AlertCircle className="mr-2 h-4 w-4" />
                Сообщить о проблеме
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-[rgb(var(--navy))] text-[rgb(var(--fog))] border-[rgb(var(--harbor))]"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium hover:text-[rgb(var(--amber))] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-[rgb(var(--amber))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--amber))]/90 font-semibold"
                  >
                    <Link href="/reports">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Сообщить о проблеме
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
