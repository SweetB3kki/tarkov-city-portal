"use client"

import Link from "next/link"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { Button } from "@/components/ui/button"
import { Plus, Minus, RotateCcw } from "lucide-react"

type Poi = {
  id: string
  name: string
  x: number // 0..1 (проценты по ширине)
  y: number // 0..1 (проценты по высоте)
  href?: string
}

const POIS: Poi[] = [
  { id: "customs", name: "Таможня", x: 0.54, y: 0.15, href: "/city" },
  { id: "port", name: "Порт", x: 0.53, y: 0.47, href: "/transport" },
  { id: "airport", name: "Аэропорт", x: 0.554, y: 0.78, href: "/transport" },
]

export function InteractiveMap() {
  return (
    <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg border border-border bg-[rgb(var(--fog))]">
      <TransformWrapper
        initialScale={1}
        minScale={0.8}
        maxScale={5}
        wheel={{ step: 0.12 }}
        doubleClick={{ mode: "zoomIn" }}
        pinch={{ step: 5 }}
        panning={{ velocityDisabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Controls */}
            <div className="absolute right-3 top-3 z-20 flex gap-2">
              <Button size="icon" variant="secondary" onClick={() => zoomIn()} aria-label="Zoom in">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => zoomOut()} aria-label="Zoom out">
                <Minus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => resetTransform()} aria-label="Reset">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Map */}
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full">
              <div className="relative w-full h-full">
                <img
                  src="/maps/tarkov-map.png"
                  alt="Карта Таркова"
                  className="select-none pointer-events-none w-full h-full object-contain"
                  draggable={false}
                />

                {/* POI markers (позиции в процентах) */}
                {POIS.map((p) => {
                  const style = {
                    left: `${p.x * 100}%`,
                    top: `${p.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                  } as const

                  const marker = (
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--amber))] text-[rgb(var(--navy))] text-xs font-bold shadow"
                      title={p.name}
                    >
                      •
                    </span>
                  )

                  return (
                    <div key={p.id} className="absolute z-10" style={style}>
                      {p.href ? (
                        <Link href={p.href} className="block">
                          {marker}
                        </Link>
                      ) : (
                        marker
                      )}
                    </div>
                  )
                })}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}