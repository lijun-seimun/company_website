"use client"

import Image from "next/image"
import { Eye, Ruler, Zap, Focus, Shield, Clock } from "lucide-react"

export function ProductDetail() {
  const opticsFeatures = [
    {
      icon: Eye,
      title: "霍夫曼调制对比成像",
      description: "三维浮雕感清晰成像，细胞核、极体、细胞分裂等关键细节尽收眼底",
    },
    {
      icon: Focus,
      title: "超高解析力",
      description: "500万像素工业级相机，2.2×2.2μm像素尺寸，0.6μm光学分辨率",
    },
    {
      icon: Shield,
      title: "胚胎友好光源",
      description: "550nm纯净绿光照明，最大程度降低光毒性，呵护胚胎健康",
    },
  ]

  const designFeatures = [
    {
      icon: Ruler,
      title: "极致紧凑",
      value: "24×8×12.2cm",
      description: "最大化节约培养箱内空间",
    },
    {
      icon: Shield,
      title: "气密性设计",
      value: "饱和湿度",
      description: "严苛条件下长期稳定运行",
    },
    {
      icon: Focus,
      title: "精准对焦",
      value: "±0.2μm",
      description: "多层扫描重复定位精度",
    },
  ]

  const powerFeatures = [
    {
      label: "工作电压",
      value: "5V",
    },
    {
      label: "曝光时间",
      value: "<20ms",
    },
    {
      label: "累积光照",
      value: "<10秒",
    },
  ]

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            成像设备
          </h2>
        </div>

        {/* Main Product Display */}
        <div className="mt-10 grid items-center gap-8 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-background">
              <Image
                src="/images/device-imaging.png"
                alt="GenesisScope成像设备"
                width={600}
                height={400}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">
              创新光学设计，洞悉发育细节
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              显微镜创新性地采用霍夫曼调制对比成像原理，能够对透明的胚胎细胞实现具有三维浮雕感的清晰成像，
              将细胞核、极体、细胞分裂等关键细节尽收眼底。
            </p>
            <div className="mt-8 space-y-4">
              {opticsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="mt-12 grid gap-6 sm:mt-24 sm:gap-8 lg:grid-cols-2">
          {/* Compact Design */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Ruler className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                精巧设计，精准对焦
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {designFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-3 text-lg font-bold text-primary">{feature.value}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{feature.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Low Power */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                超低功耗，极致温和
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              选用工业级控制与成像电路，通过优化算法深度降低运行电流，
              从源头上最大程度减少热量产生和电磁辐射。
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {powerFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-muted/50 p-3 text-center sm:p-4"
                >
                  <p className="text-lg font-bold text-primary sm:text-2xl">{feature.value}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{feature.label}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
