import { Camera, Cpu, Monitor, CircleDot } from "lucide-react"

const components = [
  {
    icon: Camera,
    title: "成像设备",
    description: "直接部署于培养箱内部隔板，将载有胚胎的微孔培养皿放置于视场中，即可开启无干扰、不间断的全过程监测。",
    highlight: "在稳定的培养环境中对胚胎进行持续、高清的成像",
  },
  {
    icon: Cpu,
    title: "控制计算机",
    description: "置于培养箱外部，通过专用数据线安全连接，彻底隔离电控部件对培养环境的任何潜在影响。",
    highlight: "单台控制器集中控制6个成像设备，提升实验室工作效率",
  },
  {
    icon: Monitor,
    title: "专业分析软件",
    description: "覆盖胚胎发育全过程的连续观测和图像采集，支持形态学与形态动力学标注，为科研分析提供完整数据支撑。",
    highlight: "图像生成、参数设定、数据存储与智能分析",
  },
  {
    icon: CircleDot,
    title: "微孔胚胎培养皿",
    description: "为系统量身定制，包含12个带有坐标标识的微孔，确保精准的胚胎追溯。",
    highlight: "提供安全的胚胎培养微环境，并配合系统进行精确定位",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            胚胎发育分析的完整解决方案
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            <span className="font-(--font-brand)">GenesisScope<sup className="text-base" style={{verticalAlign: 'super', lineHeight: 0}}>®</sup></span> 通过精密成像设备、智能控制器、专业分析软件及定制培养皿的深度集成，构建了一套面向胚胎科研与畜牧繁育的端到端发育观测与数据分析完整解决方案。
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {components.map((component, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md sm:p-8"
            >
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-14 sm:w-14">
                  <component.icon className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{component.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                    {component.description}
                  </p>
                  <div className="mt-3 rounded-lg bg-primary/5 px-3 py-2 sm:mt-4 sm:px-4 sm:py-3">
                    <p className="text-xs font-medium text-primary sm:text-sm">
                      {component.highlight}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
