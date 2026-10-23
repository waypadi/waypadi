import { Brand } from '@/components/ui/brand';

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1210px] items-center gap-[18px] border-t border-[#ecdfce] px-[3px] py-6 pb-8 max-[1100px]:mx-[5%] max-[760px]:mx-[23px] max-[760px]:grid max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-[10px] max-[760px]:py-[19px] max-[760px]:pb-[27px]" id="safety">
      <Brand compact />
      <p className="m-0 text-[10px] text-[#9a8b79] max-[760px]:col-start-1 max-[760px]:row-start-2">Share your route. Split your ride.</p>
      <div className="ml-auto flex gap-[22px] text-[10px] font-semibold text-[#746452] max-[760px]:col-span-2 max-[760px]:row-start-3 max-[760px]:ml-0 max-[760px]:mt-2 max-[760px]:gap-[18px]">
        <a href="#how">How it works</a><a href="#safety">Safety</a><a href="mailto:hello@waypadi.com">Contact</a>
      </div>
      <span className="text-[9px] text-[#aa9b8a] max-[760px]:col-start-2 max-[760px]:row-start-2 max-[760px]:text-right">© 2026 WayPadi</span>
    </footer>
  );
}
