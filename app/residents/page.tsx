import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Home, Heart, GraduationCap, Shield, HandHeart, DollarSign, FileText, Phone } from "lucide-react"

export default function ResidentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Услуги для жителей</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                ЖКХ, здравоохранение, образование, социальная поддержка и безопасность — все в одном месте.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="ЖКХ и коммунальные услуги"
                description="Оплата услуг, передача показаний счетчиков, заявки на ремонт"
                icon={Home}
                href="/residents/utilities"
              />
              <ServiceCard
                title="Здравоохранение"
                description="Запись к врачу, поиск поликлиник, вызов скорой помощи"
                icon={Heart}
                href="/residents/health"
              />
              <ServiceCard
                title="Образование"
                description="Детские сады, школы, расписание каникул, запись в кружки"
                icon={GraduationCap}
                href="/residents/education"
              />
              <ServiceCard
                title="Безопасность"
                description="Контакты экстренных служб, МЧС, полиция, пожарная служба"
                icon={Shield}
                href="/residents/safety"
              />
              <ServiceCard
                title="Социальная поддержка"
                description="Льготы, пособия, субсидии, поддержка пенсионеров"
                icon={HandHeart}
                href="/residents/social"
              />
              <ServiceCard
                title="Налоги и сборы"
                description="Оплата налогов, льготы, квитанции, расчеты"
                icon={DollarSign}
                href="/residents/taxes"
              />
            </div>
          </div>
        </section>

        {/* How-To Guide Example */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-8 text-balance">
              Как оплатить коммунальные услуги онлайн
            </h2>

            <div className="grid gap-6 max-w-4xl">
              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      1
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Найдите номер лицевого счета</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Лицевой счет указан в верхней части квитанции за коммунальные услуги. Обычно это 10-значный номер.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      2
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Перейдите в раздел оплаты</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Выберите «ЖКХ» на этой странице, затем «Оплатить онлайн». Введите номер лицевого счета.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      3
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Проверьте сумму</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Система автоматически загрузит данные о задолженности. Проверьте сумму и период оплаты.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] font-bold shrink-0">
                      4
                    </div>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading">Выберите способ оплаты</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-14">
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Оплатите банковской картой, через СБП или электронным кошельком. Деньги поступят в течение 1-3 дней.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-card border-l-4 border-[rgb(var(--amber))]">
              <h3 className="font-heading font-semibold text-[rgb(var(--navy))] mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Необходимые документы
              </h3>
              <ul className="text-[rgb(var(--steel))] space-y-1 leading-relaxed">
                <li>• Квитанция с номером лицевого счета</li>
                <li>• Банковская карта для оплаты</li>
                <li>• Данные собственника (для первой оплаты)</li>
              </ul>
            </div>

            <div className="mt-6 p-6 rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))]">
              <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Нужна помощь?
              </h3>
              <p className="text-sm leading-relaxed">Служба поддержки: 8 (800) 123-45-67 (с 9:00 до 18:00 по будням)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
