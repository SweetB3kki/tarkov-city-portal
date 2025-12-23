import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, DollarSign, Bookmark, Ticket } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Афиша</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                События, выставки, концерты, спорт и культурная жизнь города Тарков.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-[rgb(var(--fog))] border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="bg-card">
                Все события
              </Button>
              <Button variant="outline" size="sm" className="bg-card">
                Сегодня
              </Button>
              <Button variant="outline" size="sm" className="bg-card">
                На выходных
              </Button>
              <Button variant="outline" size="sm" className="bg-card">
                Бесплатные
              </Button>
              <Button variant="outline" size="sm" className="bg-card">
                Для детей
              </Button>
            </div>
          </div>
        </section>

        {/* Events View */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs defaultValue="list" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))]">Ближайшие события</h2>
                <TabsList>
                  <TabsTrigger value="list">Список</TabsTrigger>
                  <TabsTrigger value="calendar">Календарь</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="list" className="space-y-6">
                <Card className="bg-card hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--fog))] flex items-center justify-center shrink-0">
                      <Calendar className="h-12 w-12 text-[rgb(var(--steel))]" />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                            Концерт
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800">
                            Бесплатно
                          </span>
                        </div>
                        <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                          Новогодний концерт на площади Победы
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Calendar className="h-4 w-4" />
                            <span>25 декабря 2024, среда</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Clock className="h-4 w-4" />
                            <span>18:00 — 21:00</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <MapPin className="h-4 w-4" />
                            <span>Площадь Победы, Центральный район</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <DollarSign className="h-4 w-4" />
                            <span>Бесплатно</span>
                          </div>
                        </div>
                        <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                          Праздничный концерт с участием городского симфонического оркестра и приглашенных артистов.
                          Программа включает классические произведения и современные хиты.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]/90">
                            <Bookmark className="mr-2 h-4 w-4" />
                            Сохранить
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--fog))] flex items-center justify-center shrink-0">
                      <Calendar className="h-12 w-12 text-[rgb(var(--steel))]" />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                            Выставка
                          </span>
                        </div>
                        <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                          «Морская история» — фотовыставка в музее
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Calendar className="h-4 w-4" />
                            <span>15 декабря — 31 января</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Clock className="h-4 w-4" />
                            <span>10:00 — 18:00 (кроме понедельника)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <MapPin className="h-4 w-4" />
                            <span>Городской музей, ул. Морская, 12</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <DollarSign className="h-4 w-4" />
                            <span>150 ₽ (студентам — 75 ₽)</span>
                          </div>
                        </div>
                        <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                          Уникальная коллекция фотографий, рассказывающая о становлении Таркова как крупнейшего
                          портового города северо-запада.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]/90">
                            <Ticket className="mr-2 h-4 w-4" />
                            Купить билет
                          </Button>
                          <Button variant="outline">
                            <Bookmark className="mr-2 h-4 w-4" />
                            Сохранить
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--fog))] flex items-center justify-center shrink-0">
                      <Calendar className="h-12 w-12 text-[rgb(var(--steel))]" />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                            Спорт
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-100 text-amber-800">
                            Для детей
                          </span>
                        </div>
                        <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                          Зимний городской марафон
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Calendar className="h-4 w-4" />
                            <span>5 января 2025, воскресенье</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <Clock className="h-4 w-4" />
                            <span>10:00 — старт</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <MapPin className="h-4 w-4" />
                            <span>Старт: Набережная, напротив порта</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                            <DollarSign className="h-4 w-4" />
                            <span>Регистрация: 500 ₽</span>
                          </div>
                        </div>
                        <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                          Ежегодный городской марафон. Дистанции: 5 км, 10 км, 21 км. Детский забег на 1 км. Регистрация
                          до 30 декабря.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-[rgb(var(--amber))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--amber))]/90">
                            <Ticket className="mr-2 h-4 w-4" />
                            Зарегистрироваться
                          </Button>
                          <Button variant="outline">
                            <Bookmark className="mr-2 h-4 w-4" />
                            Сохранить
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="calendar">
                <div className="rounded-lg bg-card border border-border h-[600px] flex items-center justify-center">
                  <div className="text-center text-[rgb(var(--steel))]">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-[rgb(var(--harbor))]" />
                    <p className="text-lg font-medium">Календарь событий</p>
                    <p className="text-sm">Выберите дату для просмотра мероприятий</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
