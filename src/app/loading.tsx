export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-[1210px] items-center justify-center px-6">
      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#9a8b79]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#e18b21]" />
        Loading…
      </div>
    </div>
  );
}
