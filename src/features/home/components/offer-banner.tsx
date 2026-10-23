import { ButtonLink } from '@/components/ui/button';

export function OfferBanner() {
  return (
    <section className="relative isolate mx-auto mb-[54px] flex min-h-[168px] max-w-[1210px] items-center gap-[19px] overflow-hidden rounded-[20px] border border-[#efe3d1] bg-[#f7ecd9] px-[42px] py-[30px] max-[1100px]:mx-[5%] max-[760px]:mx-[14px] max-[760px]:mb-[37px] max-[760px]:grid max-[760px]:min-h-0 max-[760px]:grid-cols-[42px_1fr] max-[760px]:gap-3 max-[760px]:rounded-[17px] max-[760px]:px-[19px] max-[760px]:py-[22px]" id="offer">
      <div className="grid h-[49px] w-[49px] flex-none place-items-center rounded-2xl border border-[#e8c99a] bg-[#fff7e9] text-[25px] text-[#aa6823] max-[760px]:h-10 max-[760px]:w-10 max-[760px]:rounded-[13px]" aria-hidden="true">↗</div>
      <div>
        <div className="mb-[6px] text-[9px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">Driving that way?</div>
        <h2 className="mb-[7px] font-display text-xl font-bold leading-[1.2] tracking-[-0.8px] max-[760px]:text-[17px]">There might be a seat to share.</h2>
        <p className="m-0 text-[11px] text-[#817361] max-[760px]:text-[10px] max-[760px]:leading-[1.55]">Post your route and meet people heading in the same direction.</p>
      </div>
      <ButtonLink className="max-[760px]:col-span-full max-[760px]:mt-[6px] max-[760px]:min-h-[45px] max-[760px]:w-full" href="/rides/new" variant="dark">
        Offer a seat <span aria-hidden="true">→</span>
      </ButtonLink>
      <div className="absolute -right-[54px] -top-[121px] -z-10 h-80 w-80 rounded-full bg-[rgba(235,186,92,0.15)]" aria-hidden="true" />
    </section>
  );
}
