"use client"

import Image from "next/image"
import { 
  MousePointerClick, 
  Grid3X3, 
  Brain, 
  ListOrdered, 
  FileText, 
  RefreshCw,
  ZoomIn,
  Ruler,
  StickyNote,
  Play,
  Sparkles
} from "lucide-react"

export function EmbryologistDetail() {
  const allFeatures = [
    {
      icon: MousePointerClick,
      title: "单胚深度分析",
      subtitle: "微观洞察",
      description: "自由缩放图像观察细胞细节，使用测量工具获取精确形态学数据，添加注释标记记录关键发现",
    },
    {
      icon: Grid3X3,
      title: "全局同步比对",
      subtitle: "宏观视角",
      description: "所有胚胎以矩阵形式整齐排列，逐帧同步观察比较发育进程，快速筛选最具潜力的候选胚胎",
    },
    {
      icon: Brain,
      title: "智能注释与分析",
      subtitle: "AI赋能",
      description: "手动模式在任意时间点精准注释，自动模式AI完成关键事件注释，自动计算形态学和动力学参数",
    },
    {
      icon: ListOrdered,
      title: "自定义智能排序",
      subtitle: "精准评估",
      description: "根据临床经验自定义评分规则，自动为所有胚胎计算得分并智能排序分类",
    },
    {
      icon: FileText,
      title: "一站式数据管理",
      subtitle: "高效便捷",
      description: "数据统计、原始数据导出、一键生成标准化胚胎评估报告",
    },
    {
      icon: RefreshCw,
      title: "卓越兼容性",
      subtitle: "无缝对接",
      description: "支持导入PrimoVision系统的9孔或16孔培养皿时差成像项目",
    },
  ]

  const coreFeatures = [
    { icon: ZoomIn, label: "形态学评分" },
    { icon: Play, label: "形态动力学注释" },
    { icon: Sparkles, label: "发育潜能评估" },
    { icon: StickyNote, label: "处置方案决策" },
    { icon: Ruler, label: "发育视频导出" },
  ]

  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            胚胎学家 <span className="font-(--font-brand)">Embryologist</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            专为胚胎实验室研究人员量身打造的专业分析软件，将复杂的胚胎评估工作流程化、数据化，支持对发育过程的客观分析与科学决策。
          </p>
        </div>

        {/* Core Features Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
            >
              <feature.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Software Screenshot - Smaller */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <Image
              src="/images/embryologist-software.png"
              alt="GenesisScope胚胎学家分析软件界面"
              width={900}
              height={500}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* All Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">{feature.title}</h4>
              <p className="mt-1 text-sm text-primary">{feature.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
