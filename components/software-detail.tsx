import Image from "next/image"
import {
  Settings,
  SlidersHorizontal,
  PlayCircle,
  Plug,
  Eye,
  Rocket,
  FolderCog,
} from "lucide-react"

export function SoftwareDetail() {
  const mainFeatures = [
    {
      icon: Settings,
      title: "设备管理",
      description: "集中管理所有连接的成像设备",
    },
    {
      icon: SlidersHorizontal,
      title: "参数调整",
      description: "灵活设定各项成像参数",
    },
    {
      icon: PlayCircle,
      title: "项目控制",
      description: "精准控制每个成像设备的时差成像任务",
    },
  ]

  const workflowSteps = [
    {
      icon: Plug,
      title: "自动识别与初始化",
      subtitle: "即插即用",
      description:
        "控制器自动检测所有连接的成像设备，智能识别设备ID和版本信息，自动完成初始化操作，让设备迅速进入待命状态。",
    },
    {
      icon: Eye,
      title: "实时调试与优化",
      subtitle: "所见即所得",
      description:
        "在设备列表中轻松进入实时模式，调整对焦、亮度或测试多层扫描，所有改动实时显示，快速调校至最佳成像性能。",
    },
    {
      icon: Rocket,
      title: "一键启动与全程监控",
      subtitle: "智能追踪",
      description:
        "一键启动时差成像项目，实时查看项目信息、追踪最新图像、浏览多层扫描结果、完整追踪胚胎发育过程。",
    },
    {
      icon: FolderCog,
      title: "灵活的项目管理",
      subtitle: "中途干预",
      description:
        "提供强大的项目中途干预功能，支持暂停项目或执行更换培养液等操作，确保实验的灵活性和成功率。",
    },
  ]

  const interfaceAreas = [
    { label: "工具栏", description: "LiveMode、Setup、Start、Snapshot等功能" },
    { label: "设备列表", description: "左区 - 管理连接的成像设备" },
    { label: "图像浏览", description: "中区 - 12孔胚胎实时画面" },
    { label: "项目信息", description: "右区 - 参数设定与状态监控" },
  ]

  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            监控软件
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            集设备管理、参数设定和时差成像项目控制于一体，是您轻松驾驭整个系统的智能中枢
          </p>
        </div>

        {/* Main Features */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-3">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:gap-4 sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        

        {/* Workflow Steps */}
        <div className="mt-10 sm:mt-14">
          <h3 className="text-center text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            人性化的无缝工作流程
          </h3>

          <div className="relative mt-8">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />

            <div className="space-y-6 lg:space-y-6">
              {workflowSteps.map((step, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={index}
                    className="relative flex flex-col gap-6 lg:flex-row lg:items-center"
                  >
                    {/* Left Side */}
                    <div className="flex-1 lg:pr-8">
                      {isLeft && (
                        <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg lg:ml-auto lg:max-w-md">
                          <div className="flex items-center gap-3 lg:flex-row-reverse">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="lg:text-right">
                              <h4 className="font-semibold text-foreground">{step.title}</h4>
                              <p className="text-sm text-primary">{step.subtitle}</p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-right">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background lg:block" />

                    {/* Right Side */}
                    <div className="flex-1 lg:pl-8">
                      {!isLeft && (
                        <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg lg:mr-auto lg:max-w-md">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{step.title}</h4>
                              <p className="text-sm text-primary">{step.subtitle}</p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
