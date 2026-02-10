import { HeroVideo } from "@/components/hero-video"

export function Hero() {
  return (
    <section id="product" className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <h1 className="text-balance font-bold tracking-tight text-foreground">
              <span className="font-(--font-brand) text-2xl sm:text-4xl lg:text-5xl">GenesisScope<sup className="text-sm sm:text-lg align-super">®</sup></span>
              <span className="mt-2 block text-2xl font-bold text-primary sm:mt-3 sm:text-4xl lg:text-5xl">
                胚胎发育实时监控系统
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              面向胚胎学研究与牲畜繁育应用的时差成像与分析平台。系统在稳定的培养环境中，对多枚胚胎进行连续、低干扰的高清时差成像观测，完整记录胚胎自早期发育至囊胚阶段的动态过程。平台为研究人员提供客观、可追溯的形态学与形态动力学数据，基于人工智能算法，助力胚胎发育机制研究、培养体系优化及育种决策分析。
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[200px] sm:max-w-xs lg:max-w-sm">
            <div className="aspect-square rounded-full bg-[radial-gradient(circle,_#000_70%,_#4b5563_85%,_transparent_100%)] p-[3px] shadow-2xl ring-1 ring-primary/10">
              <div className="h-full w-full overflow-hidden rounded-full bg-black border border-primary/20">
                <HeroVideo />
              </div>
            </div>
            {/* 装饰性光晕效果 */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-sm" />
            <div className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-accent/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
