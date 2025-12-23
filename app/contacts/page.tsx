import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Контакты</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Телефоны, адреса и график работы городских служб и администрации.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--amber))]/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-start gap-4 mb-8">
              <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
              <div>
                <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-2">Экстренные службы</h2>
                <p className="text-[rgb(var(--steel))] leading-relaxed">
                  Звоните по этим номерам в случае чрезвычайных ситуаций
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-card border-destructive border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">112</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] font-semibold">Единая служба спасения</p>
                  <p className="text-sm text-[rgb(var(--steel))] mt-2">Круглосуточно, бесплатно</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-destructive border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">103</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] font-semibold">Скорая помощь</p>
                  <p className="text-sm text-[rgb(var(--steel))] mt-2">Круглосуточно, бесплатно</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-destructive border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">102</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] font-semibold">Полиция</p>
                  <p className="text-sm text-[rgb(var(--steel))] mt-2">Круглосуточно, бесплатно</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-destructive border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading text-xl">101</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--steel))] font-semibold">Пожарная служба</p>
                  <p className="text-sm text-[rgb(var(--steel))] mt-2">Круглосуточно, бесплатно</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Contacts */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-8 text-balance">
              Администрация города
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Общие контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[rgb(var(--navy))] mb-1">Телефон</p>
                      <a
                        href="tel:+78001234567"
                        className="text-[rgb(var(--steel))] hover:text-[rgb(var(--harbor))] transition-colors"
                      >
                        8 (800) 123-45-67
                      </a>
                      <p className="text-sm text-[rgb(var(--steel))] mt-1">Горячая линия (бесплатно)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[rgb(var(--navy))] mb-1">Email</p>
                      <a
                        href="mailto:info@tarkov-city.ru"
                        className="text-[rgb(var(--steel))] hover:text-[rgb(var(--harbor))] transition-colors"
                      >
                        info@tarkov-city.ru
                      </a>
                      <p className="text-sm text-[rgb(var(--steel))] mt-1">Ответ в течение 24 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[rgb(var(--navy))] mb-1">Адрес</p>
                      <p className="text-[rgb(var(--steel))] leading-relaxed">
                        ул. Ленина, 1<br />
                        г. Тарков, 184000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[rgb(var(--navy))] mb-1">Часы работы</p>
                      <p className="text-[rgb(var(--steel))] leading-relaxed">
                        Понедельник - Четверг: 9:00 - 18:00
                        <br />
                        Пятница: 9:00 - 17:00
                        <br />
                        Обед: 13:00 - 14:00
                        <br />
                        Выходные: Суббота, Воскресенье
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Местоположение</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border border-border bg-[rgb(var(--fog))] h-[400px] flex items-center justify-center">
                    <div className="text-center text-[rgb(var(--steel))]">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-[rgb(var(--harbor))]" />
                      <p className="text-lg font-medium">Карта</p>
                      <p className="text-sm">Администрация города Тарков</p>
                      <p className="text-sm">ул. Ленина, 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--fog))]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-[rgb(var(--navy))] mb-8 text-balance">
              Отделы и службы
            </h2>

            <div className="grid gap-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Приёмная мэра</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Phone className="h-4 w-4" />
                      <span>+7 (800) 123-10-01</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Mail className="h-4 w-4" />
                      <span>mayor@tarkov-city.ru</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <MapPin className="h-4 w-4" />
                      <span>каб. 301</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Комитет ЖКХ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Phone className="h-4 w-4" />
                      <span>+7 (800) 123-20-02</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Mail className="h-4 w-4" />
                      <span>housing@tarkov-city.ru</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <MapPin className="h-4 w-4" />
                      <span>каб. 105</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Комитет транспорта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Phone className="h-4 w-4" />
                      <span>+7 (800) 123-30-03</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Mail className="h-4 w-4" />
                      <span>transport@tarkov-city.ru</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <MapPin className="h-4 w-4" />
                      <span>каб. 201</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">
                    Отдел по развитию предпринимательства
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Phone className="h-4 w-4" />
                      <span>+7 (800) 123-99-99</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <Mail className="h-4 w-4" />
                      <span>business@tarkov-city.ru</span>
                    </div>
                    <div className="flex items-center gap-2 text-[rgb(var(--steel))]">
                      <MapPin className="h-4 w-4" />
                      <span>каб. 205</span>
                    </div>
                  </div>
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
