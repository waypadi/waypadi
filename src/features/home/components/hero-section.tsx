import { ButtonLink } from '@/components/ui/button';

function RouteIllustration() {
  return (
    <div
      className="relative isolate h-[430px] overflow-hidden bg-[linear-gradient(145deg,#f3c85d_0%,#edaa37_54%,#cc7929_100%)] shadow-[inset_-24px_-20px_90px_rgba(148,76,16,0.18),0_25px_55px_rgba(111,75,24,0.09)] [border-radius:48%_52%_39%_40%/48%_42%_56%_51%] max-[1100px]:h-[385px] max-[760px]:h-[min(77vw,360px)] max-[760px]:min-h-[255px] max-[760px]:w-full max-[760px]:[border-radius:46%_54%_40%_43%/45%_44%_56%_52%]"
      aria-label="Illustration of a shared route across Lagos"
      role="img"
    >
      <div className="absolute right-[68px] top-[50px] h-[305px] w-[305px] rounded-full bg-[rgba(255,224,143,0.27)] blur-[2px]" />
      <div className="absolute -right-[58px] -top-[114px] -z-10 h-80 w-80 rounded-full bg-[rgba(255,248,236,0.18)]" />
      <div className="absolute -bottom-[65px] -left-[65px] -z-10 h-[210px] w-[210px] rounded-full bg-[rgba(255,248,236,0.18)]" />
      <div className="absolute inset-0 opacity-50 [mask-image:linear-gradient(110deg,transparent_0%,black_48%,black_100%)]" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 520 470" preserveAspectRatio="none">
          <g fill="none" stroke="#fffcef" strokeOpacity=".55" strokeWidth="2">
            <path d="M-25 90 180 470M65-20l250 490M240-15 520 390M420-30 205 480M-30 310 540 70M-20 185 520 415M10 30l500 120" />
            <path d="M-20 250 520 245M100-20 90 490M360-20 375 490" stroke="#765934" strokeOpacity=".16" />
          </g>
        </svg>
      </div>
      <div className="absolute left-7 top-[41px] z-[2] -rotate-1 text-[10px] font-bold text-[#4a321c] max-[760px]:left-4 max-[760px]:top-7 max-[760px]:text-[8px]">
        <span className="mr-1 text-[#ad6519]">●</span> Same route. New company.
      </div>
      <svg className="absolute inset-0 z-[1] h-full w-full" viewBox="0 0 520 470" fill="none" aria-hidden="true">
        <path d="M112 390C146 356 152 328 194 302c35-21 70-5 94-36 20-25 2-53 29-76 23-19 64-13 83-40 16-23 8-61 45-90" stroke="#fff8ec" strokeWidth="13" strokeLinecap="round" />
        <path d="M112 390C146 356 152 328 194 302c35-21 70-5 94-36 20-25 2-53 29-76 23-19 64-13 83-40 16-23 8-61 45-90" stroke="#df8a21" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 1" />
        <circle cx="112" cy="390" r="9" fill="#382417" stroke="#fff8ec" strokeWidth="4" />
        <circle cx="445" cy="60" r="9" fill="#382417" stroke="#fff8ec" strokeWidth="4" />
      </svg>
      <div className="absolute bottom-[89px] left-[29px] z-[2] flex items-center gap-2 rounded-[10px] border border-white/75 bg-[rgba(255,253,248,0.9)] px-[11px] py-2 text-[10px] font-bold shadow-[0_6px_16px_rgba(73,47,15,0.1)] max-[760px]:bottom-[68px] max-[760px]:left-[14px]">
        <span className="h-2 w-2 rounded-full border-2 border-[#a76020]" />
        <span>Lekki Phase 1</span>
      </div>
      <div className="absolute right-[27px] top-[67px] z-[2] flex items-center gap-2 rounded-[10px] border border-white/75 bg-[rgba(255,253,248,0.9)] px-[11px] py-2 text-[10px] font-bold shadow-[0_6px_16px_rgba(73,47,15,0.1)] max-[760px]:right-[13px] max-[760px]:top-12">
        <span className="h-2 w-2 rounded-full border-2 border-[#df9b27] bg-[#df9b27]" />
        <span>Victoria Island</span>
      </div>
      <div className="absolute bottom-[103px] right-[34px] z-[2] rotate-1 text-[10px] font-bold text-[#4a321c] max-[760px]:bottom-[78px] max-[760px]:right-[14px] max-[760px]:text-[8px]">
        <span className="mr-[5px] text-[17px] text-[#fff4d2]">✳</span> Your way, together.
      </div>
      <div className="absolute bottom-6 left-1/2 z-[3] flex w-[min(350px,83%)] -translate-x-1/2 items-center gap-3 rounded-[15px] border border-white/80 bg-[rgba(255,253,248,0.96)] px-4 py-[14px] shadow-[0_12px_32px_rgba(91,55,14,0.17)] max-[760px]:bottom-[15px] max-[760px]:w-[86%] max-[760px]:px-3 max-[760px]:py-[10px]">
        <span className="grid h-[35px] w-[35px] flex-none place-items-center rounded-[11px] bg-[#fff0d0] text-xl text-[#bb711f]">↗</span>
        <div>
          <small className="mb-[3px] block text-[9px] text-[#968774] max-[760px]:text-[8px]">Example route</small>
          <strong className="font-display text-xs font-bold max-[760px]:text-[11px]">Lekki <span className="mx-1 text-orange">→</span> VI</strong>
        </div>
        <div className="ml-auto text-right">
          <strong className="block font-display text-[11px] font-bold">Together</strong>
          <small className="block text-[9px] text-[#968774] max-[760px]:text-[8px]">same way</small>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[542px] max-w-[1440px] grid-cols-2 items-center overflow-hidden px-[7.1%] pb-[74px] pt-[82px] max-[1100px]:grid-cols-[0.95fr_1.05fr] max-[1100px]:px-[5%] max-[760px]:flex max-[760px]:min-h-0 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-8 max-[760px]:px-[23px] max-[760px]:pb-[60px] max-[760px]:pt-[49px]" aria-labelledby="hero-title">
      <div className="relative z-[2] pb-[7px] max-[760px]:p-0">
        <div className="mb-[23px] flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24] max-[760px]:mb-[17px] max-[760px]:text-[9px]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#e18b21] shadow-[0_0_0_4px_rgba(225,139,33,0.12)]" />
          Better journeys start together
        </div>
        <h1 id="hero-title" className="mb-5 font-display text-[clamp(46px,5.2vw,71px)] font-extrabold leading-[1.06] tracking-[-4px] max-[760px]:mb-[14px] max-[760px]:text-[clamp(46px,11vw,62px)] max-[760px]:tracking-[-3px]">
          Share your route.<br /><em className="not-italic text-[#cb7622]">Split your ride.</em>
        </h1>
        <p className="mb-[27px] max-w-[420px] text-[15px] leading-[1.75] text-[#786b5d] max-[760px]:mb-[21px] max-[760px]:max-w-[360px] max-[760px]:text-[13px] max-[760px]:leading-[1.65]">
          Find people heading your way, share the journey, and make the everyday trip feel easier.
        </p>
        <div className="flex items-center gap-[25px] max-[760px]:gap-[19px]">
          <ButtonLink href="#find">Find a ride <span aria-hidden="true">→</span></ButtonLink>
          <a className="text-xs font-bold text-[#60442a]" href="#offer">
            I have a seat <span className="ml-[6px] text-orange" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mb-0 mt-[30px] text-[11px] text-[#897b6a]">Made for everyday journeys around Lagos.</p>
      </div>
      <RouteIllustration />
      <div className="absolute bottom-[27px] left-[7.1%] flex items-center gap-[10px] text-[10px] text-[#988a78] max-[760px]:bottom-[19px] max-[760px]:left-6 max-[760px]:text-[9px]">
        <span className="h-px w-6 bg-[#d7b17a]" />
        <span>Made for the way we move in Lagos</span>
      </div>
    </section>
  );
}
