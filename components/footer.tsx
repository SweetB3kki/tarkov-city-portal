import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { FaTelegramPlane, FaVk } from "react-icons/fa"

const footerLinks = {
  services: [
    { name: "Жителям", href: "/residents" },
    { name: "Транспорт", href: "/transport" },
    { name: "Афиша", href: "/events" },
    { name: "Город", href: "/city" },
  ],
  info: [
    { name: "Туристам", href: "/tourism" },
    { name: "Бизнесу", href: "/business" },
    { name: "Обращения", href: "/reports" },
    { name: "Контакты", href: "/contacts" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--navy))] text-[rgb(var(--fog))] border-t border-[rgb(var(--harbor))]">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--harbor))]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-lg font-bold">Тарков</div>
                <div className="text-xs text-[rgb(var(--steel))]">Городской портал</div>
              </div>
            </Link>
            <p className="text-sm text-[rgb(var(--steel))] leading-relaxed">
              Официальный портал города Тарков. Услуги, информация, поддержка для жителей и гостей города.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-[rgb(var(--fog))]">Услуги</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgb(var(--steel))] hover:text-[rgb(var(--amber))] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-[rgb(var(--fog))]">Информация</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgb(var(--steel))] hover:text-[rgb(var(--amber))] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-[rgb(var(--fog))]">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                <Phone className="h-4 w-4" />
                <a href="tel:+78001234567" className="hover:text-[rgb(var(--amber))] transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--steel))]">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@tarkov-city.ru" className="hover:text-[rgb(var(--amber))] transition-colors">
                  info@tarkov-city.ru
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://t.me/chomgus"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--harbor))] hover:bg-[rgb(var(--amber))] hover:text-[rgb(var(--navy))] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="h-4 w-4" />
              </a>
              <a
                href="https://vk.com/big_floppa"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--harbor))] hover:bg-[rgb(var(--amber))] hover:text-[rgb(var(--navy))] transition-colors"
                aria-label="ВКонтакте"
              >
                <FaVk className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgb(var(--harbor))] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[rgb(var(--steel))]">
            © {new Date().getFullYear()} Город Тарков. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-[rgb(var(--steel))] hover:text-[rgb(var(--amber))] transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
