import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBadge } from "@/components/status-badge"
import { ServiceCard } from "@/components/service-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InteractiveMap } from "@/components/interactive-map"
import {
  Bus,
  Wind,
  Snowflake,
  Anchor,
  Users,
  Calendar,
  MapPin,
  Home,
  Briefcase,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Status Widgets */}
        <section className="bg-gradient-to-b from-[rgb(var(--navy))] to-[rgb(var(--harbor))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-balance mb-4">Городской портал Тарков</h1>
              <p className="text-lg lg:text-xl text-[rgb(var(--steel))] max-w-2xl mx-auto text-balance leading-relaxed">
                Все городские услуги в одном месте. Быстро, понятно, доступно.
              </p>
            </div>

            {/* Status Widgets */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Статусы сегодня</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Transport Status */}
                <Card className="bg-[rgb(var(--fog))] border-none">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                        <Bus className="h-5 w-5" />
                      </div>
                      <StatusBadge type="info" text="Норма" />
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">
                      Общественный транспорт
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span>Работает по расписанию</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Задержек не зафиксировано</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Weather Alert */}
                <Card className="bg-[rgb(var(--amber))] border-none">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--navy))] text-[rgb(var(--fog))]">
                        <Wind className="h-5 w-5" />
                      </div>
                      <StatusBadge type="warning" text="Шторм" />
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">
                      Погодное предупреждение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[rgb(var(--navy))]">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Сильный ветер до 25 м/с</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>До 18:00 сегодня</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ice Warning */}
                <Card className="bg-[rgb(var(--fog))] border-none">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                        <Snowflake className="h-5 w-5" />
                      </div>
                      <StatusBadge type="success" text="Обработано" />
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">Дорожные условия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span>Основные дороги очищены</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Обновлено 2 часа назад</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Port Status */}
                <Card className="bg-[rgb(var(--fog))] border-none">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
                        <Anchor className="h-5 w-5" />
                      </div>
                      <StatusBadge type="info" text="Работает" />
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">Порт и паромы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span>Все рейсы по расписанию</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Следующий рейс в 14:30</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-8 text-balance">
              Быстрые действия
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Услуги для жителей"
                description="ЖКХ, здоровье, образование, соцподдержка"
                icon={Users}
                href="/residents"
              />
              <ServiceCard
                title="Транспорт"
                description="Расписание, маршруты, статусы, паромы"
                icon={Bus}
                href="/transport"
              />
              <ServiceCard
                title="Афиша"
                description="Мероприятия, события, культурная жизнь"
                icon={Calendar}
                href="/events"
              />
              <ServiceCard
                title="О городе"
                description="Районы, инфраструктура, справочник"
                icon={MapPin}
                href="/city"
              />
              <ServiceCard
                title="Туристам"
                description="Маршруты, достопримечательности, правила"
                icon={Home}
                href="/tourism"
              />
              <ServiceCard
                title="Бизнесу"
                description="Аренда, разрешения, поддержка МСП"
                icon={Briefcase}
                href="/business"
              />
            </div>
          </div>
        </section>

        {/* News & Announcements */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] text-balance">
                Новости и объявления
              </h2>
              <Button variant="ghost" asChild className="text-[rgb(var(--harbor))] hover:bg-[rgb(var(--fog))]">
                <Link href="/news">
                  Все новости
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-[rgb(var(--steel))] mb-2">15 декабря 2024</div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">
                    Изменение режима работы администрации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                    С 20 декабря вводится новый график приема граждан в администрации города.
                  </p>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-[rgb(var(--harbor))] hover:bg-[rgb(var(--fog))] font-semibold w-full justify-between"
                  >
                    <Link href="/news/1">
                      Читать далее
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-[rgb(var(--steel))] mb-2">12 декабря 2024</div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">
                    Новогодние мероприятия в центре города
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                    Программа праздничных мероприятий на площади Победы с 25 по 31 декабря.
                  </p>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-[rgb(var(--harbor))] hover:bg-[rgb(var(--fog))] font-semibold w-full justify-between"
                  >
                    <Link href="/news/2">
                      Читать далее
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-[rgb(var(--steel))] mb-2">10 декабря 2024</div>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">
                    Запуск онлайн-записи к врачам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                    Теперь можно записаться на прием к врачу онлайн через городской портал.
                  </p>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-[rgb(var(--harbor))] hover:bg-[rgb(var(--fog))] font-semibold w-full justify-between"
                  >
                    <Link href="/news/3">
                      Читать далее
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Интерактивная карта города
            </h2>
            <InteractiveMap />
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-8 text-balance">
              Часто задаваемые вопросы
            </h2>
            <div className="grid gap-6 max-w-3xl">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">
                    Как оплатить коммунальные услуги онлайн?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Перейдите в раздел «Жителям», выберите «ЖКХ», введите номер лицевого счета и следуйте инструкциям.
                    Оплата занимает 3-5 минут.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">
                    Как записаться на прием к врачу?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    В разделе «Жителям» выберите «Здоровье», затем «Запись к врачу». Укажите поликлинику, специалиста и
                    удобное время.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-lg">
                    Где посмотреть расписание автобусов?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Актуальное расписание всех маршрутов доступно в разделе «Транспорт». Можно построить маршрут и
                    узнать время прибытия ближайшего автобуса.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--navy))] text-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-balance">Есть проблема в городе?</h2>
            <p className="text-lg text-[rgb(var(--steel))] mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              Сообщите нам о проблеме через форму обращений. Мы обработаем ваш запрос в течение 24 часов.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[rgb(var(--amber))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--amber))]/90 font-bold text-base min-h-12 px-8"
            >
              <Link href="/reports">
                <MessageSquare className="mr-2 h-5 w-5" />
                Отправить обращение
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
