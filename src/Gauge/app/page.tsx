import { PerformanceComparison } from "@/components/performance-comparison"

export default function Page() {
  return (
    <div className="grid gap-6 md:grid-cols-2 p-4 max-w-4xl mx-auto bg-gray-100">
      <PerformanceComparison
        title="HORSEPOWER"
        beforeValue={123}
        afterValue={158}
        unit="bhp"
      />
      <PerformanceComparison
        title="TORQUE"
        beforeValue={148}
        afterValue={193}
        unit="lb/ft"
      />
    </div>
  )
}

