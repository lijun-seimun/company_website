import Image from "next/image"
import { FlaskConical, GraduationCap, Beef, Microscope } from "lucide-react"

export function Showcase() {
  const applications = [
    {
      icon: FlaskConical,
      title: "胚胎学与发育生物学科研机构",
      description: "用于胚胎发育动态过程的长期观测、形态学与动力学研究",
    },
    {
      icon: GraduationCap,
      title: "高校与科研院所教学与实验平台",
      description: "支撑胚胎发育相关课程教学、实验示范及科研训练",
    },
    {
      icon: Beef,
      title: "牲畜育种与胚胎工程研究",
      description: "服务于畜牧育种、胚胎工程及相关生物技术研究应用",
    },
    {
      icon: Microscope,
      title: "辅助生殖技术相关基础研究实验室",
      description: "用于非临床的胚胎发育机制研究与方法学探索",
    },
  ]

  return (
    <section id="applications" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <Image
                  src="/images/product-setup-2.png"
                  alt="GenesisScope系统工作站 - 监控软件与培养箱集成"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              探索生命早期发育的奥秘
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <span className="font-(--font-brand)">GenesisScope<sup className="text-xs align-super">®</sup></span> 时差成像系统面向胚胎发育相关的科研与教学场景，通过连续、低干扰的影像采集与数据分析，为研究人员提供深入理解胚胎早期发育过程的技术工具，助力发育生物学研究、培养条件优化及胚胎工程应用。
            </p>
            <div className="mt-8 space-y-4">
              {applications.map((app, index) => (
                <div key={index} className="flex gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <app.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{app.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
