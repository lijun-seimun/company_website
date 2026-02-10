export function Stats() {
  const stats = [
    { value: "24/7", label: "全过程实时监控" },
    { value: "0", label: "干扰培养环境" },
    { value: "HD", label: "高清影像记录" },
    { value: "AI", label: "智能分析算法" },
  ]

  return (
    <section className="relative border-y border-primary/10 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-primary/10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="group px-2 py-6 text-center transition-all hover:bg-primary/5 sm:px-6 sm:py-8 lg:py-10">
              <p className="text-2xl font-bold text-primary transition-transform group-hover:scale-110 sm:text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-foreground sm:mt-2 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
