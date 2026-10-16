const valueProps = [
  { icon: '✓', className: 'shield', title: 'Travel with confidence', description: 'Clear profiles and trip details help you choose what feels right.' },
  { icon: '₦', className: 'coins', title: 'Share the cost', description: 'Make the most of seats already going your way.' },
  { icon: '✳', className: 'leaf', title: 'Move a little lighter', description: 'Fewer cars on the road means more shared journeys.' },
];

export function ValueProps() {
  return (
    <section className="values" id="how" aria-label="Why share a ride">
      {valueProps.map((item) => (
        <article className="value-card" key={item.className}>
          <span className={`value-icon ${item.className}`} aria-hidden="true">{item.icon}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </article>
      ))}
    </section>
  );
}
