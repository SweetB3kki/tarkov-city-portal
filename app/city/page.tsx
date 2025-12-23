import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Building, Search, Phone, Clock } from "lucide-react"

export default function CityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">О городе</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Районы, инфраструктура, городские организации и справочная информация о Таркове.
              </p>
            </div>
          </div>
        </section>

        {/* Districts */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">Районы города</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] mb-4">
                    <Building className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Центральный</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">
                    Исторический центр, администрация
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Население:</strong> 45 000 чел.
                    </p>
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Площадь:</strong> 12 км²
                    </p>
                    <p className="leading-relaxed pt-2">
                      Культурный и административный центр. Основные достопримечательности, музеи, театры.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] mb-4">
                    <Building className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Портовый</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">Морской порт, промышленность</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Население:</strong> 32 000 чел.
                    </p>
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Площадь:</strong> 18 км²
                    </p>
                    <p className="leading-relaxed pt-2">
                      Крупнейший портовый комплекс. Грузовой терминал, судоремонтные предприятия.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] mb-4">
                    <Building className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Северный</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">Жилые кварталы, парки</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Население:</strong> 28 000 чел.
                    </p>
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Площадь:</strong> 15 км²
                    </p>
                    <p className="leading-relaxed pt-2">
                      Современный спальный район. Школы, детские сады, торговые центры.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Городская инфраструктура
            </h2>

            <Tabs defaultValue="healthcare" className="w-full">
              <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-6">
                <TabsTrigger value="healthcare">Здравоохранение</TabsTrigger>
                <TabsTrigger value="education">Образование</TabsTrigger>
                <TabsTrigger value="culture">Культура</TabsTrigger>
              </TabsList>

              <TabsContent value="healthcare" className="space-y-4">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Городская поликлиника №1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">ул. Ленина, 45, Центральный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-11-11</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Пн-Пт: 8:00-20:00, Сб: 9:00-15:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">
                      Городская больница им. Пирогова
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">пр. Морской, 78, Северный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-03-03</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Круглосуточно</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Школа №5</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">ул. Школьная, 12, Центральный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-55-05</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Пн-Пт: 8:00-18:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Детский сад «Солнышко»</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">ул. Детская, 3, Северный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-22-22</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Пн-Пт: 7:00-19:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="space-y-4">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Городской музей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">ул. Морская, 12, Центральный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-77-77</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Вт-Вс: 10:00-18:00, Пн: выходной</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Драматический театр</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">пл. Победы, 1, Центральный район</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">+7 (800) 123-88-88</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-[rgb(var(--steel))] mt-0.5 shrink-0" />
                        <span className="text-[rgb(var(--steel))]">Касса: Пн-Вс 11:00-19:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Directory Search */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Справочник организаций
            </h2>
            <div className="max-w-2xl mb-8">
              <div className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Поиск по названию, адресу или типу организации..."
                  className="flex-1 min-h-11"
                />
                <Button className="bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]/90 min-h-11 px-6">
                  <Search className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-card border border-border h-[300px] flex items-center justify-center">
              <div className="text-center text-[rgb(var(--steel))]">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-[rgb(var(--harbor))]" />
                <p className="text-lg font-medium">Карта организаций</p>
                <p className="text-sm">Используйте поиск для отображения результатов</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
