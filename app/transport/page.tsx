import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBadge } from "@/components/status-badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Anchor, MapPin, Clock, AlertTriangle, Snowflake, TrendingUp } from "lucide-react"

export default function TransportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Транспорт</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Расписания, маршруты, статусы движения, порт и паромное сообщение.
              </p>
            </div>
          </div>
        </section>

        {/* Winter Mode Alert */}
        <section className="bg-[rgb(var(--amber))] py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-start gap-4">
              <Snowflake className="h-6 w-6 shrink-0 text-[rgb(var(--navy))]" />
              <div>
                <h3 className="font-heading font-bold text-[rgb(var(--navy))] mb-1">Зимний режим работы</h3>
                <p className="text-sm text-[rgb(var(--navy))] leading-relaxed">
                  Из-за погодных условий возможны задержки маршрутов. Прогноз ветра: сильный до 25 м/с. Рекомендуем
                  проверять актуальное расписание.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Route Status */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Статусы маршрутов
            </h2>

            <Tabs defaultValue="buses" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                <TabsTrigger value="buses">Автобусы</TabsTrigger>
                <TabsTrigger value="ferries">Паромы</TabsTrigger>
              </TabsList>

              <TabsContent value="buses" className="space-y-4">
                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold text-xl">
                          5
                        </div>
                        <div>
                          <CardTitle className="text-[rgb(var(--navy))] font-heading">Маршрут 5</CardTitle>
                          <p className="text-sm text-[rgb(var(--steel))]">Центр — Набережная — Порт</p>
                        </div>
                      </div>
                      <StatusBadge type="success" text="Норма" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <Clock className="h-4 w-4" />
                        <span>Каждые 15 минут</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span>По расписанию</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <MapPin className="h-4 w-4" />
                        <span>23 остановки</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold text-xl">
                          12
                        </div>
                        <div>
                          <CardTitle className="text-[rgb(var(--navy))] font-heading">Маршрут 12</CardTitle>
                          <p className="text-sm text-[rgb(var(--steel))]">Вокзал — Центр — Площадь</p>
                        </div>
                      </div>
                      <StatusBadge type="warning" text="Задержка" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <Clock className="h-4 w-4" />
                        <span>Каждые 20 минут</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--amber))]">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Задержка 10 мин</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <MapPin className="h-4 w-4" />
                        <span>18 остановок</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold text-xl">
                          8
                        </div>
                        <div>
                          <CardTitle className="text-[rgb(var(--navy))] font-heading">Маршрут 8</CardTitle>
                          <p className="text-sm text-[rgb(var(--steel))]">Северный район — Центр</p>
                        </div>
                      </div>
                      <StatusBadge type="success" text="Норма" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <Clock className="h-4 w-4" />
                        <span>Каждые 30 минут</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span>По расписанию</span>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                        <MapPin className="h-4 w-4" />
                        <span>15 остановок</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ferries" className="space-y-4">
                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                          <Anchor className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-[rgb(var(--navy))] font-heading">Паром «Нева»</CardTitle>
                          <p className="text-sm text-[rgb(var(--steel))]">Тарков — Остров Северный</p>
                        </div>
                      </div>
                      <StatusBadge type="success" text="Работает" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Отправление из Таркова</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">14:30, 17:00, 19:30</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Время в пути</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">45 минут</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Стоимость билета</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">250 ₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                          <Anchor className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-[rgb(var(--navy))] font-heading">Паром «Балтика»</CardTitle>
                          <p className="text-sm text-[rgb(var(--steel))]">Тарков — Соседний порт</p>
                        </div>
                      </div>
                      <StatusBadge type="success" text="Работает" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Отправление из Таркова</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">8:00, 12:00, 18:00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Время в пути</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">2 часа 15 минут</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[rgb(var(--steel))]">Стоимость билета</span>
                        <span className="font-semibold text-[rgb(var(--navy))]">650 ₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Route Planner */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Построить маршрут
            </h2>
            <div className="rounded-lg overflow-hidden border border-border bg-card h-[400px] flex items-center justify-center">
              <div className="text-center text-[rgb(var(--steel))]">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-[rgb(var(--harbor))]" />
                <p className="text-lg font-medium">Планировщик маршрутов</p>
                <p className="text-sm">Укажите точки отправления и назначения</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
