import Image from "next/image"
import { Shield, Grid3X3, Minimize2, Sparkles, FlaskConical, Thermometer, Baby } from "lucide-react"

export function CultureDishDetail() {
  const features = [
    {
      icon: Shield,
      title: "卓越材质",
      subtitle: "安全无忧",
      description:
        "采用符合美国药典（USP）标准的聚苯乙烯材料，为胚胎提供生物安全的培养环境。",
    },
    {
      icon: Grid3X3,
      title: "独立微孔",
      subtitle: "精准定位",
      description:
        "皿底设计为3行×4列矩阵，共12个独立微孔，通过行号（1,2,3）与列号（A,B,C,D）组成的坐标系，实现精准识别与追溯。",
    },
    {
      icon: Minimize2,
      title: "紧凑尺寸",
      subtitle: "易于操作",
      description:
        "培养皿最大直径仅38mm，设计精巧，便于实验室日常操作与存放。",
    },
  ]

  const certifications = [
    {
      icon: Sparkles,
      title: "无菌处理",
      description: "符合ISO 11137标准的灭菌工艺",
      highlight: "SAL 10⁻⁶",
      highlightLabel: "无菌保证水平",
    },
    {
      icon: FlaskConical,
      title: "无细胞毒性",
      description: "经过无细胞毒性检测",
      highlight: "USP<87>",
      highlightLabel: "ISO 10993-5认证",
    },
    {
      icon: Thermometer,
      title: "无热源",
      description: "内毒素水平低于USP标准",
      highlight: "<20 EU/套",
      highlightLabel: "内毒素水平",
    },
    {
      icon: Baby,
      title: "对胚胎无毒性",
      description: "小鼠胚胎实验(MEA)96小时培养",
      highlight: ">90%",
      highlightLabel: "囊胚形成率",
    },
  ]

  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              胚胎培养皿（12微孔）
            </h2>

            {/* Features Grid */}
            <div className="mt-6 space-y-4 sm:mt-10 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md sm:gap-4 sm:p-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                      <span className="ml-2 text-sm font-normal text-primary">
                        {feature.subtitle}
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/50">
                <Image
                  src="/images/culture-dish.png"
                  alt="GenesisScope专用胚胎培养皿 - 12微孔设计"
                  width={600}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Specs Badge */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
              <div className="rounded-full border border-border bg-card px-3 py-1.5 text-center shadow-sm sm:px-4 sm:py-2">
                <p className="text-base font-bold text-primary sm:text-lg">38mm</p>
                <p className="text-xs text-muted-foreground">最大直径</p>
              </div>
              <div className="rounded-full border border-border bg-card px-3 py-1.5 text-center shadow-sm sm:px-4 sm:py-2">
                <p className="text-base font-bold text-primary sm:text-lg">12</p>
                <p className="text-xs text-muted-foreground">独立微孔</p>
              </div>
              <div className="rounded-full border border-border bg-card px-3 py-1.5 text-center shadow-sm sm:px-4 sm:py-2">
                <p className="text-base font-bold text-primary sm:text-lg">{'3\u00D74'}</p>
                <p className="text-xs text-muted-foreground">矩阵布局</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Certifications Section */}
        <div className="mt-12 sm:mt-24">
          <div className="text-center">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              安全认证与检测标准
            </h3>
            <p className="mt-4 text-muted-foreground">
              严格遵循国际标准，确保每一批培养皿的安全性与可靠性
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/30 hover:shadow-lg sm:p-6"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-4 sm:h-14 sm:w-14">
                  <cert.icon className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
                </div>
                <h4 className="text-sm font-semibold text-foreground sm:text-base">{cert.title}</h4>
                <p className="mt-1 hidden text-sm text-muted-foreground sm:mt-2 sm:block">{cert.description}</p>
                <div className="mt-2 rounded-lg bg-muted/50 px-2 py-1.5 sm:mt-4 sm:px-3 sm:py-2">
                  <p className="text-sm font-bold text-primary sm:text-lg">{cert.highlight}</p>
                  <p className="text-xs text-muted-foreground">{cert.highlightLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
