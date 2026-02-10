import Image from "next/image"
import { Server, MonitorDot, Cable } from "lucide-react"

export function ControllerDetail() {
  const features = [
    {
      icon: Server,
      title: "工业级计算平台",
      description: "采用标准1U机架式工控机设计，内置Windows 10操作系统、8GB内存及120/240GB高速固态硬盘，为系统流畅运行和海量数据处理提供强大保障。",
    },
    {
      icon: MonitorDot,
      title: "运行状态可视化",
      description: "前面板配备直观的状态指示灯，可实时反映各成像设备的连接与工作状态，方便研究人员快速掌握系统运行情况，提升实验管理的可控性与安全性。",
    },
    {
      icon: Cable,
      title: "高扩展接口设计",
      description: "后面板集成多6个成像设备专用接口，并提供HDMI、USB及RJ45网络接口，支持显示输出、数据交互与网络接入，便于与实验室现有科研环境无缝衔接。",
    },
  ]

  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            控制计算机
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
            作为系统的智能中枢，控制器集中协调多套成像设备的运行与数据采集，将复杂的多设备时差成像实验整合为稳定、高效的一体化流程。
          </p>
        </div>

        {/* Product Images */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-card p-4">
            <Image
              src="/images/controller-front.png"
              alt="GenesisScope控制单元计算机前面板"
              width={600}
              height={200}
              className="h-auto max-h-48 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-card p-4">
            <Image
              src="/images/controller-rear.png"
              alt="GenesisScope控制单元计算机后面板"
              width={600}
              height={200}
              className="h-auto max-h-48 w-auto object-contain"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
