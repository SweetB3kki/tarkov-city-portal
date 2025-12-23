import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Camera, Anchor, Building, AlertTriangle, Info } from "lucide-react"

export default function TourismPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Туристам</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Маршруты, достопримечательности и полезная информация для гостей Таркова.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal Rules Alert */}
        <section className="bg-[rgb(var(--amber))] py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 shrink-0 text-[rgb(var(--navy))]" />
              <div>
                <h3 className="font-heading font-bold text-[rgb(var(--navy))] mb-1">Сезонные правила безопасности</h3>
                <p className="text-sm text-[rgb(var(--navy))] leading-relaxed">
                  Зимой возможны штормовые предупреждения и туман. Следите за погодой, одевайтесь тепло. Набережная
                  может быть закрыта при ветре более 20 м/с.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready-Made Routes */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Готовые маршруты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-sm text-[rgb(var(--steel))]">
                    <Clock className="h-4 w-4" />
                    <span>1-2 часа</span>
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Исторический центр</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">
                    Пешая прогулка по старому городу
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] text-sm leading-relaxed mb-4">
                    Площадь Победы → Драматический театр → Городской музей → Собор Николая Чудотворца → Ратушная площадь
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--steel))] mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Старт: Площадь Победы</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[rgb(var(--harbor))] border-[rgb(var(--harbor))] hover:bg-[rgb(var(--harbor))] hover:text-[rgb(var(--fog))] bg-transparent"
                  >
                    Посмотреть на карте
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-sm text-[rgb(var(--steel))]">
                    <Clock className="h-4 w-4" />
                    <span>2-3 часа</span>
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Портовая набережная</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">Морская прогулка вдоль порта</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] text-sm leading-relaxed mb-4">
                    Набережная → Смотровая площадка → Маяк → Морской вокзал → Рыбный рынок → Парк Победы
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--steel))] mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Старт: Набережная, причал №1</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[rgb(var(--harbor))] border-[rgb(var(--harbor))] hover:bg-[rgb(var(--harbor))] hover:text-[rgb(var(--fog))] bg-transparent"
                  >
                    Посмотреть на карте
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-sm text-[rgb(var(--steel))]">
                    <Clock className="h-4 w-4" />
                    <span>Целый день</span>
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Полный день в Таркове</CardTitle>
                  <CardDescription className="text-[rgb(var(--steel))]">Все главные места за один день</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] text-sm leading-relaxed mb-4">
                    Центр → Музей → Обед на набережной → Порт → Прогулка на пароме → Ужин в рыбном ресторане
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--steel))] mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Старт: Площадь Победы, 9:00</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-[rgb(var(--harbor))] border-[rgb(var(--harbor))] hover:bg-[rgb(var(--harbor))] hover:text-[rgb(var(--fog))] bg-transparent"
                  >
                    Посмотреть на карте
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Points of Interest */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Точки интереса
            </h2>

            <div className="grid gap-6">
              <Card className="bg-card">
                <div className="md:flex">
                  <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--steel))]/10 flex items-center justify-center shrink-0">
                    <Camera className="h-12 w-12 text-[rgb(var(--steel))]" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                          Архитектура
                        </span>
                      </div>
                      <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                        Собор Николая Чудотворца
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                        Главный собор города, построен в 1856 году. Действующий храм с уникальной архитектурой в
                        северно-русском стиле. Свободный вход, можно подняться на колокольню.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <MapPin className="h-4 w-4" />
                          <span>ул. Соборная, 3, Центральный район</span>
                        </div>
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <Clock className="h-4 w-4" />
                          <span>Ежедневно 8:00-19:00</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="bg-card">
                <div className="md:flex">
                  <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--steel))]/10 flex items-center justify-center shrink-0">
                    <Anchor className="h-12 w-12 text-[rgb(var(--steel))]" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                          Природа
                        </span>
                      </div>
                      <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                        Смотровая площадка «Маяк»
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                        Лучший вид на порт, залив и город. Работающий маяк 1892 года постройки. Особенно красиво на
                        закате. Рекомендуем приходить в безветренную погоду.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <MapPin className="h-4 w-4" />
                          <span>Набережная, восточная оконечность</span>
                        </div>
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <Clock className="h-4 w-4" />
                          <span>Круглосуточно, бесплатно</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="bg-card">
                <div className="md:flex">
                  <div className="md:w-64 h-48 md:h-auto bg-[rgb(var(--steel))]/10 flex items-center justify-center shrink-0">
                    <Building className="h-12 w-12 text-[rgb(var(--steel))]" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                          Культура
                        </span>
                      </div>
                      <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">Городской музей</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                        История Таркова от основания до наших дней. Экспозиции о морском деле, быте поморов, развитии
                        порта. Интерактивные залы для детей. Аудиогид на 5 языках.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <MapPin className="h-4 w-4" />
                          <span>ул. Морская, 12, Центральный район</span>
                        </div>
                        <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                          <Clock className="h-4 w-4" />
                          <span>Вт-Вс 10:00-18:00, билет 150 ₽</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Useful Info */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Полезная информация
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <Card className="bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] border-none">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Info className="h-6 w-6" />
                    <CardTitle className="font-heading">Как добраться</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-relaxed">
                  <p>• Самолет: аэропорт в 15 км от города</p>
                  <p>• Поезд: центральный вокзал</p>
                  <p>• Автобус: междугородний терминал</p>
                  <p>• Паром: из соседних портов</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-[rgb(var(--harbor))] border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-[rgb(var(--harbor))]" />
                    <CardTitle className="font-heading text-[rgb(var(--navy))]">Лучшее время</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-[rgb(var(--steel))] leading-relaxed">
                  <p>• Лето (июнь-август): белые ночи</p>
                  <p>• Зима (декабрь-февраль): новогодние ярмарки</p>
                  <p>• Избегайте: март (слякоть), ноябрь (туманы)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
