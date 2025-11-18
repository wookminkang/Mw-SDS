import { Button } from "@/app/components/ui"

export function MdsHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto py-3">
        <div className="flex items-center justify-between">
          {/* 타이틀 */}
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            MDS System UI
          </h1>

          {/* 검색창 */}
        </div>
      </div>
    </header>
  )
}
