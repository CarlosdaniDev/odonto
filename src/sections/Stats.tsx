import { Reveal } from "@/components/Reveal"
import { Stat } from "@/components/Stat"
import { stats } from "@/data/stats"

export function Stats() {
  return (
    <div className="relative z-10 -mt-12 px-4 sm:-mt-16">
      <Reveal>
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 rounded-[26px] bg-white p-8 shadow-med sm:grid-cols-4 sm:p-10">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
