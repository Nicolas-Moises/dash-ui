import { Header } from "@/components/header";
import { Overview } from "@/components/overview";
import { Sales } from "@/components/sales";
import { Cards } from "@/components/cards";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="max-w-7xl w-full mx-auto">
      <div className="flex-1 space-y-4 py-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
            </div>
          </div>
          </div>

          <Cards />
          <div className="flex justify-between gap-2 mt-2">
            <div className="p-6 rounded-xl border border-zinc-400/20 max-w-2xl w-full">
              <h2 className="text-base font-bold text-zinc-200 mb-10 ml-8">Overview</h2>
              <Overview />
            </div>
            <div className="p-6 rounded-xl border border-zinc-400/20 max-w-2xl w-full">
              <h2 className="text-base font-bold text-zinc-200 mb-10 ml-8">Sales</h2>
              <Sales />
            </div>
          </div>
      </div>
    </main>
  )
}
