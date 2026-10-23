const valueProps = [
  { icon: '✓', className: 'rounded-[12px_12px_15px_15px]', title: 'Travel with confidence', description: 'Clear profiles and trip details help you choose what feels right.' },
  { icon: '₦', className: 'text-base', title: 'Share the cost', description: 'Make the most of seats already going your way.' },
  { icon: '✳', className: 'text-[#4d8152]', title: 'Move a little lighter', description: 'Fewer cars on the road means more shared journeys.' },
];

export function ValueProps() {
  return (
    <section className="mx-auto mb-[65px] grid max-w-[1210px] grid-cols-3 gap-8 px-1 py-1 max-[1100px]:mx-[5%] max-[760px]:mx-[23px] max-[760px]:mb-[43px] max-[760px]:grid-cols-1 max-[760px]:gap-5" id="how" aria-label="Why share a ride">
      {valueProps.map((item) => (
        <article className="flex items-start gap-[13px]" key={item.title}>
          <span className={`grid h-[37px] w-[37px] flex-none place-items-center rounded-xl border border-[#efdcbf] bg-[#fff4dc] text-lg font-bold text-[#b76c1c] ${item.className}`} aria-hidden="true">{item.icon}</span>
          <div>
            <h3 className="mb-[5px] mt-0 font-display text-xs font-bold">{item.title}</h3>
            <p className="mb-0 max-w-[245px] text-[10px] leading-[1.6] text-[#918373] max-[760px]:max-w-[310px]">{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
