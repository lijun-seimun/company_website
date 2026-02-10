import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="赛芒 Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">赛芒（北京）信息技术有限公司</span>
                <span className="text-xs text-muted-foreground">Tech Brings Better Life</span>
              </div>
            </Link>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#product" className="text-muted-foreground transition-colors hover:text-primary">
                  产品介绍
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-primary">
                  核心功能
                </Link>
              </li>
              <li>
                <Link href="#applications" className="text-muted-foreground transition-colors hover:text-primary">
                  应用场景
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground transition-colors hover:text-primary">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+86 186-1242-6695</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hongjian@seimun.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>北京市丰台区纪家庙155号A125</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 分割线和版权信息 */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 赛芒（北京）信息技术有限公司 版权所有
            </p>
            <p className="text-sm text-muted-foreground">
              京ICP备15061950号
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
