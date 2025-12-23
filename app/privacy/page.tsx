import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 text-balance">
                Политика конфиденциальности
              </h1>
              <p className="text-lg text-[rgb(var(--steel))] text-balance leading-relaxed">
                Информация об обработке персональных данных на портале города Тарков
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card p-6 lg:p-8 rounded-lg border border-border space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">1. Общие положения</h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                    пользователей городского портала Тарков (далее — Портал). Администрация города Тарков обязуется
                    соблюдать конфиденциальность персональных данных пользователей.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">
                    2. Какие данные мы собираем
                  </h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-3">
                    При использовании Портала мы можем собирать следующую информацию:
                  </p>
                  <ul className="text-[rgb(var(--steel))] space-y-2 leading-relaxed list-disc pl-6">
                    <li>Имя, фамилия, отчество</li>
                    <li>Контактная информация (адрес электронной почты, номер телефона)</li>
                    <li>Адрес проживания или регистрации</li>
                    <li>Данные об обращениях и запросах в городские службы</li>
                    <li>Техническая информация (IP-адрес, тип браузера, операционная система)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">
                    3. Цели обработки данных
                  </h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-3">Ваши данные используются для:</p>
                  <ul className="text-[rgb(var(--steel))] space-y-2 leading-relaxed list-disc pl-6">
                    <li>Предоставления доступа к городским услугам через Портал</li>
                    <li>Обработки обращений и запросов в городские службы</li>
                    <li>Информирования о статусе обращений и важных событиях</li>
                    <li>Улучшения качества работы Портала</li>
                    <li>Выполнения требований законодательства Российской Федерации</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">4. Защита данных</h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Мы применяем технические и организационные меры для защиты ваших данных от несанкционированного
                    доступа, изменения, раскрытия или уничтожения. Доступ к персональным данным имеют только
                    уполномоченные сотрудники администрации города.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">5. Ваши права</h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mb-3">Вы имеете право:</p>
                  <ul className="text-[rgb(var(--steel))] space-y-2 leading-relaxed list-disc pl-6">
                    <li>Получать информацию о наличии и содержании ваших персональных данных</li>
                    <li>Требовать уточнения, блокирования или уничтожения ваших данных</li>
                    <li>Отозвать согласие на обработку персональных данных</li>
                    <li>Обжаловать действия администрации в надзорных органах</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">
                    6. Срок хранения данных
                  </h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не
                    менее срока, установленного законодательством РФ. После завершения обработки данные удаляются или
                    обезличиваются.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">
                    7. Изменения в политике
                  </h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    Мы можем периодически обновлять настоящую Политику конфиденциальности. Актуальная версия всегда
                    доступна на этой странице. Дата последнего обновления: 15 декабря 2024 года.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <h2 className="font-heading text-2xl font-bold text-[rgb(var(--navy))] mb-3">Контакты</h2>
                  <p className="text-[rgb(var(--steel))] leading-relaxed">
                    По вопросам обработки персональных данных обращайтесь:
                  </p>
                  <p className="text-[rgb(var(--steel))] leading-relaxed mt-3">
                    Email:{" "}
                    <a href="mailto:privacy@tarkov-city.ru" className="text-[rgb(var(--harbor))] hover:underline">
                      privacy@tarkov-city.ru
                    </a>
                    <br />
                    Телефон: 8 (800) 123-45-67
                    <br />
                    Адрес: г. Тарков, ул. Ленина, 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
