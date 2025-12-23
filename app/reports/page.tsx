"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Home, Bus, Lightbulb, TreePine, AlertCircle, MessageSquare, CheckCircle, Search } from "lucide-react"

const categories = [
  { id: "utilities", name: "ЖКХ", description: "Отопление, вода, уборка", icon: Home },
  { id: "transport", name: "Транспорт", description: "Дороги, остановки, маршруты", icon: Bus },
  { id: "lighting", name: "Освещение", description: "Фонари, светофоры", icon: Lightbulb },
  { id: "ecology", name: "Экология", description: "Мусор, озеленение", icon: TreePine },
  { id: "safety", name: "Безопасность", description: "Опасные объекты", icon: AlertCircle },
  { id: "other", name: "Другое", description: "Прочие обращения", icon: MessageSquare },
]

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [reportNumber] = useState(() => `TRK-${Date.now().toString().slice(-6)}`)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
                Обращение принято
              </h1>
              <p className="text-lg text-[rgb(var(--steel))] mb-8 leading-relaxed">
                Ваше обращение зарегистрировано под номером{" "}
                <strong className="text-[rgb(var(--navy))]">{reportNumber}</strong>
              </p>

              <Card className="bg-[rgb(var(--fog))] border-[rgb(var(--harbor))] border-2 text-left mb-8">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] font-heading">Что дальше?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[rgb(var(--steel))] leading-relaxed">
                  <p>1. Ваше обращение будет рассмотрено в течение 24 часов</p>
                  <p>2. Вы получите уведомление на email о статусе</p>
                  <p>3. Проблема будет решена в течение 3-7 рабочих дней</p>
                </CardContent>
              </Card>

              <div className="bg-card p-6 rounded-lg border border-border mb-8">
                <h3 className="font-heading font-semibold text-[rgb(var(--navy))] mb-3 flex items-center gap-2 justify-center">
                  <Search className="h-5 w-5" />
                  Проверить статус обращения
                </h3>
                <div className="flex gap-2 max-w-md mx-auto">
                  <Input placeholder="Введите номер обращения" className="flex-1" />
                  <Button className="bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] hover:bg-[rgb(var(--harbor))]/90">
                    Проверить
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="text-[rgb(var(--harbor))] border-[rgb(var(--harbor))]"
              >
                Отправить ещё одно обращение
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">Обращения</h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Сообщите о проблеме в городе. Мы рассмотрим ваше обращение в течение 24 часов.
              </p>
            </div>
          </div>
        </section>

        {/* Category Selection */}
        {!selectedCategory ? (
          <section className="py-12 lg:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-6 text-balance">
                Выберите категорию проблемы
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Card
                      key={category.id}
                      className="bg-card hover:shadow-lg transition-all cursor-pointer hover:border-[rgb(var(--harbor))]"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--harbor))] text-[rgb(var(--fog))] shrink-0">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-[rgb(var(--navy))] font-heading mb-1">{category.name}</CardTitle>
                            <p className="text-sm text-[rgb(var(--steel))]">{category.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 lg:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCategory(null)}
                  className="mb-6 text-[rgb(var(--harbor))]"
                >
                  ← Назад к выбору категории
                </Button>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-[rgb(var(--navy))] font-heading text-2xl">
                      Форма обращения: {categories.find((c) => c.id === selectedCategory)?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Category (hidden) */}
                      <input type="hidden" value={selectedCategory} />

                      {/* Address */}
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-[rgb(var(--navy))] font-semibold">
                          Адрес или район проблемы <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="address"
                          placeholder="Например: ул. Ленина, 45 или Центральный район"
                          required
                          className="min-h-11"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-[rgb(var(--navy))] font-semibold">
                          Описание проблемы <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Опишите проблему подробно. Укажите, когда это произошло и что нужно исправить."
                          required
                          rows={6}
                          className="resize-none"
                        />
                        <p className="text-xs text-[rgb(var(--steel))]">Минимум 20 символов</p>
                      </div>

                      {/* File Upload */}
                      <div className="space-y-2">
                        <Label htmlFor="file" className="text-[rgb(var(--navy))] font-semibold">
                          Фото проблемы (необязательно)
                        </Label>
                        <Input id="file" type="file" accept="image/*" className="min-h-11" />
                        <p className="text-xs text-[rgb(var(--steel))]">Форматы: JPG, PNG. Максимум 5 МБ</p>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[rgb(var(--navy))] font-semibold">
                            Ваше имя <span className="text-destructive">*</span>
                          </Label>
                          <Input id="name" placeholder="Иван Иванов" required className="min-h-11" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[rgb(var(--navy))] font-semibold">
                            Телефон <span className="text-destructive">*</span>
                          </Label>
                          <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="min-h-11" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[rgb(var(--navy))] font-semibold">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input id="email" type="email" placeholder="example@mail.ru" required className="min-h-11" />
                        <p className="text-xs text-[rgb(var(--steel))]">На этот адрес придёт уведомление о статусе</p>
                      </div>

                      {/* Consent */}
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-[rgb(var(--fog))]">
                        <Checkbox id="consent" required className="mt-1" />
                        <Label
                          htmlFor="consent"
                          className="text-sm text-[rgb(var(--steel))] leading-relaxed cursor-pointer"
                        >
                          Я согласен на обработку персональных данных и ознакомлен с{" "}
                          <a href="/privacy" className="text-[rgb(var(--harbor))] hover:underline">
                            политикой конфиденциальности
                          </a>
                        </Label>
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        className="w-full bg-[rgb(var(--amber))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--amber))]/90 font-bold text-base min-h-12"
                      >
                        Отправить обращение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
