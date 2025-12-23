import type React from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  badge?: React.ReactNode
}

export function ServiceCard({ title, description, icon: Icon, href, badge }: ServiceCardProps) {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow border-border h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          {badge && <div>{badge}</div>}
        </div>
        <CardTitle className="text-[rgb(var(--navy))] font-heading">{title}</CardTitle>
        <CardDescription className="text-[rgb(var(--steel))] leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-between text-[rgb(var(--harbor))] hover:bg-[rgb(var(--fog))] font-semibold min-h-11"
        >
          <Link href={href}>
            Подробнее
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
