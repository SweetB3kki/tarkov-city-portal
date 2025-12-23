import { AlertCircle, AlertTriangle, Info, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export type StatusType = "info" | "warning" | "alert" | "success"

interface StatusBadgeProps {
  type: StatusType
  text: string
  className?: string
}

const statusConfig = {
  info: {
    icon: Info,
    className: "bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-[rgb(var(--amber))] text-[rgb(var(--navy))]",
  },
  alert: {
    icon: AlertCircle,
    className: "bg-destructive text-destructive-foreground",
  },
  success: {
    icon: CheckCircle,
    className: "bg-emerald-500 text-white",
  },
}

export function StatusBadge({ type, text, className }: StatusBadgeProps) {
  const config = statusConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold",
        config.className,
        className,
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  )
}
