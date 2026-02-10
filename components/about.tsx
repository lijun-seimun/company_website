"use client"

import { Mail, Phone, MapPin, Headphones, Clock, FileText, Building2, Target, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-background to-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            关于我们
          </h2>
        </div>

        {/* Company Introduction */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="group rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 transition-transform group-hover:scale-110">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">公司简介</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              赛芒是一家面向基础医学与生命科学领域的技术型企业，专注于将精密光学成像、计算机视觉与人工智能算法应用于胚胎发育等复杂生命过程的长期观测与定量研究。
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 transition-transform group-hover:scale-110">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">企业愿景</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              公司秉持"技术造福生命"的发展理念，致力于以技术拓展人类对生命的认知边界，通过智能化与数据驱动手段，将科学理解持续转化为促进科学进步、造福人类的现实价值。
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-primary/20 transition-transform group-hover:scale-110">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">核心团队</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              核心团队由生物学家、计算机科学家及工程技术专家共同组成，成员来自国内外顶尖高校与科研机构，具备跨学科研究能力与复杂科研系统的工程化落地经验。
            </p>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col rounded-2xl border border-border bg-muted/30 p-8">
            <h3 className="text-xl font-bold text-foreground">联系我们</h3>

            <div className="mt-6 flex flex-1 flex-col justify-center space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">+86 186-1242-6695</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">hongjian@seimun.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">北京市丰台区纪家庙155号A125</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="flex flex-col rounded-2xl border border-border bg-muted/30 p-8">
            <h3 className="text-xl font-bold text-foreground">技术支持</h3>

            <div className="mt-6 flex flex-1 flex-col justify-center space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">在线技术支持</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">定期维护服务</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">培训与文档</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
