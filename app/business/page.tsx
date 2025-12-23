import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building, FileText, HandHeart, Phone, Mail, MapPin } from "lucide-react"

export default function BusinessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Бизнесу</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Аренда городской собственности, разрешения, поддержка малого бизнеса.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Услуги для бизнеса
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Аренда городской собственности"
                description="Помещения, земельные участки, торговые места"
                icon={Building}
                href="/business/rental"
              />
              <ServiceCard
                title="Разрешения и согласования"
                description="Лицензии, разрешения на строительство, вывески"
                icon={FileText}
                href="/business/permits"
              />
              <ServiceCard
                title="Поддержка малого бизнеса"
                description="Гранты, субсидии, льготное кредитование"
                icon={HandHeart}
                href="/business/support"
              />
            </div>
          </div>
        </section>

        {/* Permits Checklist */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Как получить разрешение на размещение вывески
            </h2>

            <div className="grid gap-6 max-w-4xl">
              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      1
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Подготовьте документы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-3">
                    Соберите необходимые документы для подачи заявления в комитет по архитектуре.
                  </p>
                  <ul className="text-sm text-[rgb(var(--steel))] space-y-1">
                    <li>• Заявление (скачать форму)</li>
                    <li>• Эскиз вывески с размерами</li>
                    <li>• Договор аренды помещения</li>
                    <li>• ИНН, ОГРН организации</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      2
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Подайте заявление</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Подать документы можно онлайн через портал или лично в МФЦ. Срок рассмотрения — до 10 рабочих дней.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      3
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Получите решение</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    После одобрения получите разрешение и можете приступать к изготовлению и монтажу вывески.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Programs */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Программы поддержки
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Грант на открытие бизнеса</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                    До 500 000 ₽ на открытие малого бизнеса. Приоритет — производство, услуги населению, IT.
                  </p>
                  <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Требования:</strong> впервые регистрируете бизнес,
                      возраст до 35 лет
                    </p>
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Срок приема заявок:</strong> до 31 января 2025
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Субсидия на аренду помещения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-4">
                    Компенсация до 50% арендной платы в первый год работы для социально значимых проектов.
                  </p>
                  <div className="space-y-2 text-sm text-[rgb(var(--steel))]">
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Требования:</strong> работа менее 1 года, не менее 3
                      сотрудников
                    </p>
                    <p>
                      <strong className="text-[rgb(var(--navy))]">Срок приема заявок:</strong> круглогодично
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
              Контакты отдела по развитию предпринимательства
            </h2>

            <Card className="bg-card max-w-2xl">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[rgb(var(--harbor))] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[rgb(var(--navy))]">Адрес</p>
                      <p className="text-[rgb(var(--steel))] leading-relaxed">
                        ул. Ленина, 1, каб. 205
                        <br />
                        Центральный район, г. Тарков
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[rgb(var(--harbor))] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[rgb(var(--navy))]">Телефон</p>
                      <p className="text-[rgb(var(--steel))]">+7 (800) 123-99-99</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[rgb(var(--harbor))] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[rgb(var(--navy))]">Email</p>
                      <p className="text-[rgb(var(--steel))]">business@tarkov-city.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[rgb(var(--harbor))] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[rgb(var(--navy))]">Часы приема</p>
                      <p className="text-[rgb(var(--steel))] leading-relaxed">
                        Понедельник - Пятница: 9:00 - 18:00
                        <br />
                        Обед: 13:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
